const express = require('express');
const consultasController = require('../controllers/consultasController');

const router = express.Router();

router.get('/', consultasController.getAll)
router.get('/:id_profissional/:id_aluno', consultasController.getById)
router.post('/', consultasController.create)
router.put('/:id_profissional/:id_aluno', consultasController.update)
router.delete('/:id_profissional/:id_aluno', consultasController.delete)

module.exports = router;
