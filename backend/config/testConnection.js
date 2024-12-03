const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'root',       
    password: '',      
    database: 'mydb'    
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) throw error;
    console.log('A solução é: ', results[0].solution);
    connection.end();
});
