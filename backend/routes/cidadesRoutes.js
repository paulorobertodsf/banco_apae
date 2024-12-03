const express = require('express')
const cidadesController = require('../controllers/cidadesController')

const router = express.Router()

router.get('/', cidadesController.getAll)          
router.get('/:id', cidadesController.getById)      
router.post('/', cidadesController.create)         
router.put('/:id', cidadesController.update)       
router.delete('/:id', cidadesController.delete)    

module.exports = router
