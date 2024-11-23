const express = require('express')
const estadosController = require('../controllers/estadosController')

const router = express.Router()

router.get('/', estadosController.getAll)          
router.get('/:id', estadosController.getById)      
router.post('/', estadosController.create)         
router.put('/:id', estadosController.update)       
router.delete('/:id', estadosController.delete)    

module.exports = router
