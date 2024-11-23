const express = require('express')
const diaDaSemanaController = require('../controllers/diaDaSemanaController')

const router = express.Router()

router.get('/', diaDaSemanaController.getAll)             
router.get('/:id', diaDaSemanaController.getById)         
router.post('/', diaDaSemanaController.create)            
router.put('/:id', diaDaSemanaController.update)          
router.delete('/:id', diaDaSemanaController.delete)       

module.exports = router
