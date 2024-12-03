const express = require('express')
const horariosController = require('../controllers/horariosController')

const router = express.Router()

router.get('/', horariosController.getAll)          
router.get('/:id', horariosController.getById)      
router.post('/', horariosController.create)         
router.put('/:id', horariosController.update)       
router.delete('/:id', horariosController.delete)    

module.exports = router
