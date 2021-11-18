const mysql = require('mysql');
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "animal-welfare",
    connectionLimit: 50,
    dateStrings: true //"createDtm": "2021-11-01T03:59:53.000Z"  ===>  "createDtm": "2021-11-01 10:59:53"
});

module.exports = connection;
//ห้ามมี {}
