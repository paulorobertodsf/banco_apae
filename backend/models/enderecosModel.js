const db = require('../config/database')

const Enderecos = {
    getAll: (callback) => {
        const query = `
            SELECT enderecos.codigo, enderecos.rua, enderecos.bairro, enderecos.id_cidade,
                   cidades.nome AS cidade_nome, cidades.uf 
            FROM enderecos
            INNER JOIN cidades ON enderecos.id_cidade = cidades.codigo
        `
        db.query(query, callback)
    },

    getById: (id, callback) => {
        const query = `
            SELECT enderecos.codigo, enderecos.rua, enderecos.bairro, enderecos.id_cidade,
                   cidades.nome AS cidade_nome, cidades.uf 
            FROM enderecos
            INNER JOIN cidades ON enderecos.id_cidade = cidades.codigo
            WHERE enderecos.codigo = ?
        `
        db.query(query, [id], callback)
    },

    create: (data, callback) => {
        const { rua, bairro, id_cidade } = data
        const query = `
            INSERT INTO enderecos (rua, bairro, id_cidade) 
            VALUES (?, ?, ?)
        `
        db.query(query, [rua, bairro, id_cidade], callback)
    },

    update: (id, data, callback) => {
        const { rua, bairro, id_cidade } = data
        const query = `
            UPDATE enderecos 
            SET rua = ?, bairro = ?, id_cidade = ? 
            WHERE codigo = ?
        `
        db.query(query, [rua, bairro, id_cidade, id], callback)
    },

    delete: (id, callback) => {
        const query = `DELETE FROM enderecos WHERE codigo = ?`
        db.query(query, [id], callback)
    },
}

module.exports = Enderecos
