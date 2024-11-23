const db = require('../config/database')

const DiaDaSemana = {
    getAll: (callback) => {
        const query = 'SELECT * FROM dia_da_semana'
        db.query(query, callback)
    },

    getById: (id, callback) => {
        const query = 'SELECT * FROM dia_da_semana WHERE codigo = ?'
        db.query(query, [id], callback)
    },

    create: (data, callback) => {
        const { descricao } = data
        const query = 'INSERT INTO dia_da_semana (descricao) VALUES (?)'
        db.query(query, [descricao], callback)
    },

    update: (id, data, callback) => {
        const { descricao } = data
        const query = 'UPDATE dia_da_semana SET descricao = ? WHERE codigo = ?'
        db.query(query, [descricao, id], callback)
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM dia_da_semana WHERE codigo = ?'
        db.query(query, [id], callback)
    },
}

module.exports = DiaDaSemana
