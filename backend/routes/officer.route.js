const route = require('express').Router()
const authenticate = require('../middlewares/authenticate');
const officerController = require('../controllers/officer.controller')






route.post('/registeruser',  officerController.registerOfficer)
route.post('/loginuser', officerController.loginOfficer) 
route.get('/getalluser',authenticate, officerController.getAllUser) 
route.get('/getsingleuser/:id', authenticate, officerController.getSingleUser)  
route.get('/deleteuser', authenticate, officerController.deleteAllUser)  













module.exports = route