const express = require('express')
const funcoesController = require('../controllers/funcoesController')

const router = express.Router()

router.get('/', funcoesController.getAll)          
router.get('/:id', funcoesController.getById)      
router.post('/', funcoesController.create)         
router.put('/:id', funcoesController.update)       
router.delete('/:id', funcoesController.delete)    

module.exports = router
