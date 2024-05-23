const route = require('express').Router()

const ownerController = require('../controllers/owner.controller')







route.post('/add', ownerController.createOwner ) 

route.get('/getall', ownerController.getAllOwner ) 

route.put('/update/:id', ownerController.updateOwner ) 

route.delete('/delete/:id', ownerController.deleteOwner ) 












module.exports = route