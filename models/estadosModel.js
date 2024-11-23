const db = require('../config/database')

const Estados = {
    getAll: (callback) => {
        db.query('SELECT * FROM estados', callback)
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM estados WHERE codigo = ?', [id], callback)
    },

    create: (data, callback) => {
        const { nome, uf } = data
        db.query('INSERT INTO estados (nome, uf) VALUES (?, ?)', [nome, uf], callback)
    },

    update: (id, data, callback) => {
        const { nome, uf } = data
        db.query('UPDATE estados SET nome = ?, uf = ? WHERE codigo = ?', [nome, uf, id], callback)
    },

    delete: (id, callback) => {
        db.query('DELETE FROM estados WHERE codigo = ?', [id], callback)
    },
}

module.exports = Estados
