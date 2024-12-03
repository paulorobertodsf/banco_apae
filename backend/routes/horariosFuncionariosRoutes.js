const express = require('express')
const horariosFuncionariosController = require('../controllers/horariosFuncionariosController')

const router = express.Router()

router.get('/', horariosFuncionariosController.getAll)                                      
router.get('/:idFuncionario/:idHorario', horariosFuncionariosController.getById)          
router.post('/', horariosFuncionariosController.create)                                   
router.put('/:idFuncionario/:idHorario', horariosFuncionariosController.update)           
router.delete('/:idFuncionario/:idHorario', horariosFuncionariosController.delete)        

module.exports = router
