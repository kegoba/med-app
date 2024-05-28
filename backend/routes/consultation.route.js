var route = require('express').Router()
const authenticate = require('../middlewares/authenticate');
const consultationController = require('../controllers/consultation.controller')







route.post('/createconsultation', 
           // authenticate, 
            consultationController.createConsultation
        )

route.get('/getalluserconsultation', 
             
            consultationController.getAllUserAndConsultation)


route.delete('/deletealluserconsultation', 
                 
                consultationController.deleteAllConsultation)


route.post('/getsingleconsulation'
        , consultationController.getSinglePatientConsultation)   













module.exports = route