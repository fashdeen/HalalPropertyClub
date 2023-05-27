

const mysql = require("mysql");
const conn = mysql.createConnection({

    // host: 'localhost',
    // user: 'mysqluser',
    // password: 'Fashcode!234',
    // database: 'HPC'

    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

conn.connect();
console.log("DB Connected");

module.exports =conn;
