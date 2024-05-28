const route = require('express').Router()

const officerController = require('../controllers/officer.controller')






route.post('/registeruser', officerController.registerOfficer)
route.post('/loginuser', officerController.loginOfficer) 
route.get('/getalluser', officerController.getAllUser) 
route.get('/getsingleuser/:id', officerController.getSingleUser)  
route.get('/deleteuser', officerController.deleteAllUser)  













module.exports = route