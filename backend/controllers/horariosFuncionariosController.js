const HorariosFuncionarios = require('../models/horariosFuncionariosModel')

const horariosFuncionariosController = {
    getAll: (req, res) => {
        HorariosFuncionarios.getAll((err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.json(results)
            }
        })
    },

    getById: (req, res) => {
        const { idFuncionario, idHorario } = req.params
        HorariosFuncionarios.getById(idFuncionario, idHorario, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (results.length === 0) {
                res.status(404).json({ message: 'Horário não encontrado para esse funcionário' })
            } else {
                res.json(results[0])
            }
        })
    },

    create: (req, res) => {
        const data = req.body
        HorariosFuncionarios.create(data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.status(201).json({ id_funcionarios: data.id_funcionarios, id_horarios: data.id_horarios, id_dia_da_semana: data.id_dia_da_semana })
            }
        })
    },

    update: (req, res) => {
        const { idFuncionario, idHorario } = req.params
        const data = req.body
        HorariosFuncionarios.update(idFuncionario, idHorario, data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Horário não encontrado para esse funcionário' })
            } else {
                res.json({ id_funcionarios: idFuncionario, id_horarios: idHorario, ...data })
            }
        })
    },

    delete: (req, res) => {
        const { idFuncionario, idHorario } = req.params
        HorariosFuncionarios.delete(idFuncionario, idHorario, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Horário não encontrado para esse funcionário' })
            } else {
                res.json({ message: 'Horário do funcionário excluído com sucesso' })
            }
        })
    },
}

module.exports = horariosFuncionariosController
