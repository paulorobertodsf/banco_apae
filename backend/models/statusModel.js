const db = require('../config/database')

const Status = {
    getAll: (callback) => {
        const query = 'SELECT * FROM status'
        db.query(query, callback)
    },

    getById: (id, callback) => {
        const query = 'SELECT * FROM status WHERE codigo = ?'
        db.query(query, [id], callback)
    },

    create: (data, callback) => {
        const { descricao } = data
        const query = 'INSERT INTO status (descricao) VALUES (?)'
        db.query(query, [descricao], callback)
    },

    update: (id, data, callback) => {
        const { descricao } = data
        const query = 'UPDATE status SET descricao = ? WHERE codigo = ?'
        db.query(query, [descricao, id], callback)
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM status WHERE codigo = ?'
        db.query(query, [id], callback)
    },
}

module.exports = Status
