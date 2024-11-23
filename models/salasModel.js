const db = require('../config/database')

const Salas = {
    getAll: (callback) => {
        const query = 'SELECT * FROM salas'
        db.query(query, callback)
    },

    getById: (id, callback) => {
        const query = 'SELECT * FROM salas WHERE codigo = ?'
        db.query(query, [id], callback)
    },

    create: (data, callback) => {
        const { descricao } = data
        const query = 'INSERT INTO salas (descricao) VALUES (?)'
        db.query(query, [descricao], callback)
    },

    update: (id, data, callback) => {
        const { descricao } = data
        const query = 'UPDATE salas SET descricao = ? WHERE codigo = ?'
        db.query(query, [descricao, id], callback)
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM salas WHERE codigo = ?'
        db.query(query, [id], callback)
    },
}

module.exports = Salas
