import mysql from 'mysql';

// require('dotenv').config();

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "mais1code",
});

export default conexao;