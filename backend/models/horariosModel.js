const db = require('../config/database')

const Horarios = {
    getAll: (callback) => {
        const query = 'SELECT * FROM horarios'
        db.query(query, callback)
    },

    getById: (id, callback) => {
        const query = 'SELECT * FROM horarios WHERE codigo = ?'
        db.query(query, [id], callback)
    },

    create: (data, callback) => {
        const { inicio, fim } = data
        const query = 'INSERT INTO horarios (inicio, fim) VALUES (?, ?)'
        db.query(query, [inicio, fim], callback)
    },

    update: (id, data, callback) => {
        const { inicio, fim } = data
        const query = 'UPDATE horarios SET inicio = ?, fim = ? WHERE codigo = ?'
        db.query(query, [inicio, fim, id], callback)
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM horarios WHERE codigo = ?'
        db.query(query, [id], callback)
    },
}

module.exports = Horarios
