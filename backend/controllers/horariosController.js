const Horarios = require('../models/horariosModel')

const horariosController = {
    getAll: (req, res) => {
        Horarios.getAll((err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.json(results)
            }
        })
    },

    getById: (req, res) => {
        const { id } = req.params
        Horarios.getById(id, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (results.length === 0) {
                res.status(404).json({ message: 'Horário não encontrado' })
            } else {
                res.json(results[0])
            }
        })
    },

    create: (req, res) => {
        const data = req.body
        Horarios.create(data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.status(201).json({ codigo: result.insertId, ...data })
            }
        })
    },

    update: (req, res) => {
        const { id } = req.params
        const data = req.body
        Horarios.update(id, data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Horário não encontrado' })
            } else {
                res.json({ codigo: id, ...data })
            }
        })
    },

    delete: (req, res) => {
        const { id } = req.params
        Horarios.delete(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Horário não encontrado' })
            } else {
                res.json({ message: 'Horário excluído com sucesso' })
            }
        })
    },
}

module.exports = horariosController
