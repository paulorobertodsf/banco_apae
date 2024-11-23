const express = require('express')
const enderecosController = require('../controllers/enderecosController')

const router = express.Router()

router.get('/', enderecosController.getAll)          
router.get('/:id', enderecosController.getById)      
router.post('/', enderecosController.create)         
router.put('/:id', enderecosController.update)       
router.delete('/:id', enderecosController.delete)    

module.exports = router
