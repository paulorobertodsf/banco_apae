const db = require('../config/database')

const HorariosFuncionarios = {
    getAll: (callback) => {
        const query = 'SELECT * FROM horarios_funcionarios'
        db.query(query, callback)
    },

    getById: (idFuncionario, idHorario, callback) => {
        const query = 'SELECT * FROM horarios_funcionarios WHERE id_funcionarios = ? AND id_horarios = ?'
        db.query(query, [idFuncionario, idHorario], callback)
    },

    create: (data, callback) => {
        const { id_funcionarios, id_horarios, id_dia_da_semana } = data
        const query = 'INSERT INTO horarios_funcionarios (id_funcionarios, id_horarios, id_dia_da_semana) VALUES (?, ?, ?)'
        db.query(query, [id_funcionarios, id_horarios, id_dia_da_semana], callback)
    },

    update: (idFuncionario, idHorario, data, callback) => {
        const { id_dia_da_semana } = data
        const query = 'UPDATE horarios_funcionarios SET id_dia_da_semana = ? WHERE id_funcionarios = ? AND id_horarios = ?'
        db.query(query, [id_dia_da_semana, idFuncionario, idHorario], callback)
    },

    delete: (idFuncionario, idHorario, callback) => {
        const query = 'DELETE FROM horarios_funcionarios WHERE id_funcionarios = ? AND id_horarios = ?'
        db.query(query, [idFuncionario, idHorario], callback)
    },
}

module.exports = HorariosFuncionarios
