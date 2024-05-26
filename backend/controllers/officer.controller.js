const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const Officer = require('../models/officer.model');

const  checkEmail = (email) => {
  const regex = /@medpharm\.com$/i;
  const data = regex.test(email);
  return data
}

const registerOfficer =   async (req, res) => {
  console.log(req.body)
  if (req.body.password !== ""){
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      let isStaff = checkEmail(req.body.email)
      const officer = new Officer({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        isStaff :  isStaff
      });
      //await officer.save();
      res.status(200).json({data : officer});
    }
    catch(error){
      res.status(400).json({data : error.message})
    }
  
  } else{
    {
      res.status(400).json({data : "password Required"})
    }
  }
    
  
  }
  

const loginOfficer = async (req, res) => {
  try {
     
    const officer = await Officer.findOne({ email: req.body.email });
    if (officer) {
      await bcrypt.compare(req.body.password, officer.password, (wrong, correct)=>{
        if (correct){
          const token = jwt.sign({ id: officer._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
          data ={
            token : token,
            name : officer.name,
            email : officer.email,
            isStaff : officer.isStaff,
            id : officer._id,
          }
            res.status(200).json({data : data});

        }else {
          res.status(401).json({ data :  'Invalid Password or Email'});
        }
      })
      
    }else{
      res.status(401).json({ data :  'Invalid Password or Email'});
    }

  }catch(error){
    res.status(401).json({ data :  error});

  }
  
};

const getSingleUser = async (req, res) => {
  console.log(req.body.officerId)
  try{
    const officer = await Officer.findById(req.body.officerId)
                    .populate("consultationField")

    res.status(200).json({data:officer});

  } catch(error){
    res.status(401).json({message: error.errors})
  }
  
};
const getAllUser = async (req, res) => {
  try{
    const officer = await Officer.find()

    res.status(200).json({data:officer});

  } catch(error){
    res.status(401).json({message: error.errors})
  }
  
};

module.exports = {
    registerOfficer,
    loginOfficer,
    getSingleUser,
    getAllUser,
};
