const Estados = require('../models/estadosModel')

const estadosController = {
    getAll: (req, res) => {
        Estados.getAll((err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.json(results)
            }
        })
    },

    getById: (req, res) => {
        const { id } = req.params
        Estados.getById(id, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (results.length === 0) {
                res.status(404).json({ message: 'Estado não encontrado' })
            } else {
                res.json(results[0])
            }
        })
    },

    create: (req, res) => {
        const data = req.body
        Estados.create(data, (err, result) => {
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
        Estados.update(id, data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Estado não encontrado' })
            } else {
                res.json({ codigo: id, ...data })
            }
        })
    },

    delete: (req, res) => {
        const { id } = req.params
        Estados.delete(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Estado não encontrado' })
            } else {
                res.json({ message: 'Estado excluído com sucesso' })
            }
        })
    },
}

module.exports = estadosController
