const db = require('../config/database')

const Alunos = {
    getAll: (callback) => {
        const query = `
            SELECT alunos.codigo, alunos.nome, alunos.data_nascimento, alunos.id_endereco,
                   enderecos.rua, enderecos.bairro, enderecos.id_cidade
            FROM alunos
            INNER JOIN enderecos ON alunos.id_endereco = enderecos.codigo
        `
        db.query(query, callback)
    },

    getById: (id, callback) => {
        const query = `
            SELECT alunos.codigo, alunos.nome, alunos.data_nascimento, alunos.id_endereco,
                   enderecos.rua, enderecos.bairro, enderecos.id_cidade
            FROM alunos
            INNER JOIN enderecos ON alunos.id_endereco = enderecos.codigo
            WHERE alunos.codigo = ?
        `
        db.query(query, [id], callback)
    },

    create: (data, callback) => {
        const { nome, data_nascimento, id_endereco } = data
        const query = `
            INSERT INTO alunos (nome, data_nascimento, id_endereco)
            VALUES (?, ?, ?)
        `
        db.query(query, [nome, data_nascimento, id_endereco], callback)
    },

    update: (id, data, callback) => {
        const { nome, data_nascimento, id_endereco } = data
        const query = `
            UPDATE alunos
            SET nome = ?, data_nascimento = ?, id_endereco = ?
            WHERE codigo = ?
        `
        db.query(query, [nome, data_nascimento, id_endereco, id], callback)
    },

    delete: (id, callback) => {
        const query = `DELETE FROM alunos WHERE codigo = ?`
        db.query(query, [id], callback)
    },
}

module.exports = Alunos
