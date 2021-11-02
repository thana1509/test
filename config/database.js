const mysql = require('mysql');
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "animal-welfare",
    connectionLimit: 10
});

module.exports = connection;
//ห้ามมี {}
