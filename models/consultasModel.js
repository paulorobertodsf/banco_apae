const db = require('../config/database')

const Consultas = {
    getAll: (callback) => {
        const query = `
            SELECT * 
            FROM consultas 
            JOIN funcionarios ON consultas.id_profissional = funcionarios.codigo
            JOIN alunos ON consultas.id_aluno = alunos.codigo
            JOIN horarios ON consultas.id_horario = horarios.codigo
            JOIN salas ON consultas.id_sala = salas.codigo
            JOIN status ON consultas.id_status = status.codigo
        `
        db.query(query, callback)
    },

    getById: (id_profissional, id_aluno, callback) => {
        const query = `
            SELECT * 
            FROM consultas 
            WHERE id_profissional = ? AND id_aluno = ?
        `
        db.query(query, [id_profissional, id_aluno], callback)
    },

    create: (data, callback) => {
        const { id_profissional, id_aluno, observacao, data_consulta, id_horario, id_sala, id_status } = data
        const query = `
            INSERT INTO consultas (id_profissional, id_aluno, observacao, data, id_horario, id_sala, id_status)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `
        db.query(query, [id_profissional, id_aluno, observacao, data_consulta, id_horario, id_sala, id_status], callback)
    },

    update: (id_profissional, id_aluno, data, callback) => {
        const { observacao, data_consulta, id_horario, id_sala, id_status } = data
        const query = `
            UPDATE consultas
            SET observacao = ?, data = ?, id_horario = ?, id_sala = ?, id_status = ?
            WHERE id_profissional = ? AND id_aluno = ?
        `
        db.query(query, [observacao, data_consulta, id_horario, id_sala, id_status, id_profissional, id_aluno], callback)
    },

    delete: (id_profissional, id_aluno, callback) => {
        const query = 'DELETE FROM consultas WHERE id_profissional = ? AND id_aluno = ?'
        db.query(query, [id_profissional, id_aluno], callback)
    },
}

module.exports = Consultas
