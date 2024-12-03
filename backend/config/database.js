const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',  // Host do WampServer
    user: 'root',       // Usuário padrão do MySQL no WampServer é 'root'
    password: '',       // A senha padrão para 'root' é geralmente vazia
    database: 'mydb'    // Substitua pelo nome do seu banco de dados
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;
