const Consultas = require('../models/consultasModel')

const consultasController = {
    getAll: (req, res) => {
        Consultas.getAll((err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.json(results)
            }
        })
    },

    getById: (req, res) => {
        const { id_profissional, id_aluno } = req.params
        Consultas.getById(id_profissional, id_aluno, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (results.length === 0) {
                res.status(404).json({ message: 'Consulta não encontrada' })
            } else {
                res.json(results[0])
            }
        })
    },

    create: (req, res) => {
        const data = req.body
        Consultas.create(data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.status(201).json({ id_profissional: data.id_profissional, id_aluno: data.id_aluno, ...data })
            }
        })
    },

    update: (req, res) => {
        const { id_profissional, id_aluno } = req.params
        const data = req.body
        Consultas.update(id_profissional, id_aluno, data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Consulta não encontrada' })
            } else {
                res.json({ id_profissional, id_aluno, ...data })
            }
        })
    },

    delete: (req, res) => {
        const { id_profissional, id_aluno } = req.params
        Consultas.delete(id_profissional, id_aluno, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Consulta não encontrada' })
            } else {
                res.json({ message: 'Consulta excluída com sucesso' })
            }
        })
    },
}

module.exports = consultasController
