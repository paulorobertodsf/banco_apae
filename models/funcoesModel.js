const db = require('../config/database')

const Funcoes = {
    getAll: (callback) => {
        db.query('SELECT * FROM funcoes', callback)
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM funcoes WHERE codigo = ?', [id], callback)
    },
    create: (data, callback) => {
        const { nome, especialidade } = data
        db.query('INSERT INTO funcoes (nome, especialidade) VALUES (?, ?)', [nome, especialidade], callback)
    },
    update: (id, data, callback) => {
        const { nome, especialidade } = data
        db.query(
            'UPDATE funcoes SET nome = ?, especialidade = ? WHERE codigo = ?',
            [nome, especialidade, id],
            callback
        )
    },
    delete: (id, callback) => {
        db.query('DELETE FROM funcoes WHERE codigo = ?', [id], callback)
    },
}

module.exports = Funcoes
