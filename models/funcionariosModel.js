const db = require('../config/database')

const Funcionarios = {
    getAll: (callback) => {
        const query = `
            SELECT funcionarios.codigo, funcionarios.nome, funcionarios.usuario, funcionarios.id_funcao, 
                   funcoes.nome AS funcao_nome 
            FROM funcionarios 
            INNER JOIN funcoes ON funcionarios.id_funcao = funcoes.codigo
        `
        db.query(query, callback)
    },

    getById: (id, callback) => {
        const query = `
            SELECT funcionarios.codigo, funcionarios.nome, funcionarios.usuario, funcionarios.id_funcao, 
                   funcoes.nome AS funcao_nome 
            FROM funcionarios 
            INNER JOIN funcoes ON funcionarios.id_funcao = funcoes.codigo
            WHERE funcionarios.codigo = ?
        `
        db.query(query, [id], callback)
    },

    create: (data, callback) => {
        const { nome, id_funcao, usuario, senha } = data
        const query = `
            INSERT INTO funcionarios (nome, id_funcao, usuario, senha) 
            VALUES (?, ?, ?, ?)
        `
        db.query(query, [nome, id_funcao, usuario, senha], callback)
    },

    update: (id, data, callback) => {
        const { nome, id_funcao, usuario, senha } = data
        const query = `
            UPDATE funcionarios 
            SET nome = ?, id_funcao = ?, usuario = ?, senha = ? 
            WHERE codigo = ?
        `
        db.query(query, [nome, id_funcao, usuario, senha, id], callback)
    },

    delete: (id, callback) => {
        const query = `DELETE FROM funcionarios WHERE codigo = ?`
        db.query(query, [id], callback)
    },
}

module.exports = Funcionarios
