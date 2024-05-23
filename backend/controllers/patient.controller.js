const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const Officer = require('../models/officer.model');


const registerPatient =   async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const officer = new Officer({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPassword,
  });
  await officer.save();
  res.status(201).send('Officer registered');
};

const loginPatient = async (req, res) => {
  const officer = await Officer.findOne({ email: req.body.email });
  if (officer && await bcrypt.compare(req.body.password, officer.password)) {
    const token = jwt.sign({ id: officer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
};

module.exports = {
    registerPatient,
    loginPatient,
};
