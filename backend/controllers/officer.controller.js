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


//register user or add Paitent
const registerOfficer =   async (req, res) => {
  if (req.body.password !== ""){
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      let isStaff = checkEmail(req.body.email)
      const officer = new Officer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        email: req.body.email,
        password: hashedPassword,
        isStaff :  isStaff
      });
      
      const data = await officer.save();
      res.status(200).json({data : data});
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
  
//Login User
const loginOfficer = async (req, res) => {
  console.log("step1")
  try {
    const officer = await Officer.findOne({ email: req.body.email });
    console.log("step2")
    if (officer) {
      console.log("step3")
      await bcrypt.compare(req.body.password, officer.password, (wrong, correct)=>{
        if (correct){
          console.log("success")
          // assign Token to user and save
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
          res.status(400).json({ data :  'Invalid Password or Email '});
        }
      })
      
    }else{
      res.status(401).json({ data :  'Invalid Password'});
    }

  }catch(error){
    res.status(400).json({ data :  error});

  }
  
};


//get Single user
const getSingleUser = async (req, res) => {
  try{
    const officer = await Officer.findById({_id:req.params.id})//.populate("consultationId")

    res.status(200).json({data : officer});

  } catch(error){
    res.status(400).json({message: error.errors})
  }
  
};

//get all user
const getAllUser = async (req, res) => {
  try{
    const officer = await Officer.find()

    res.status(200).json({data:officer});

  } catch(error){
    res.status(401).json({message: error.errors})
  }
  
};

const deleteAllUser = async (req, res) => {
  try{
       await OfficerdeleteMany({})

    res.status(200).json({data:"all user delted"});

  } catch(error){
    res.status(401).json({message: error.errors})
  }
  
};

module.exports = {
    registerOfficer,
    loginOfficer,
    getSingleUser,
    getAllUser,
    deleteAllUser
};
