const express = require('express')
const funcionariosController = require('../controllers/funcionariosController')

const router = express.Router()

router.get('/', funcionariosController.getAll)          
router.get('/:id', funcionariosController.getById)      
router.post('/', funcionariosController.create)         
router.put('/:id', funcionariosController.update)       
router.delete('/:id', funcionariosController.delete)    

module.exports = router
