var route = require('express').Router()
const authenticate = require('../middlewares/authenticate');
const consultationController = require('../controllers/consultation.controller')







route.post('/createconsultation', authenticate, consultationController.createPatientConsultation)
route.get('/getallconsultation', authenticate, consultationController.getAllPatientConsultation)
route.get('/filterconsultation', authenticate, consultationController.filterConsultation)
route.get('/getsingleconsultation/:id', authenticate, consultationController.getSinglePatientConsultation) //getConsulationByOfficerId  
route.get('/getofficerconsultation', authenticate, consultationController.getConsulationByOfficerId)   













module.exports = route