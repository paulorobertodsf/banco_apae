const db = require('../config/database')

const Cidades = {
    getAll: (callback) => {
        const query = `
            SELECT cidades.codigo, cidades.nome, cidades.id_estado, 
                   estados.nome AS estado_nome, estados.uf 
            FROM cidades 
            INNER JOIN estados ON cidades.id_estado = estados.codigo
        `
        db.query(query, callback)
    },

    getById: (id, callback) => {
        const query = `
            SELECT cidades.codigo, cidades.nome, cidades.id_estado, 
                   estados.nome AS estado_nome, estados.uf 
            FROM cidades 
            INNER JOIN estados ON cidades.id_estado = estados.codigo
            WHERE cidades.codigo = ?
        `
        db.query(query, [id], callback)
    },

    create: (data, callback) => {
        const { nome, id_estado } = data
        const query = `
            INSERT INTO cidades (nome, id_estado) 
            VALUES (?, ?)
        `
        db.query(query, [nome, id_estado], callback)
    },

    update: (id, data, callback) => {
        const { nome, id_estado } = data
        const query = `
            UPDATE cidades 
            SET nome = ?, id_estado = ? 
            WHERE codigo = ?
        `
        db.query(query, [nome, id_estado, id], callback)
    },

    delete: (id, callback) => {
        const query = `DELETE FROM cidades WHERE codigo = ?`
        db.query(query, [id], callback)
    },
}

module.exports = Cidades
