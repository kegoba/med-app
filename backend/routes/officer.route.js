const route = require('express').Router()

const officerController = require('../controllers/officer.controller')







route.post('/addofficer', officerController.registerOfficer)
route.post('/loginofficer', officerController.loginOfficer)  













module.exports = route