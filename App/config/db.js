

const mysql = require("mysql");
const conn = mysql.createConnection({

    // host: 'localhost',
    // user: 'XX',
    // password: 'XX',
    // database: 'XX'

    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

conn.connect();
console.log("DB Connected");

module.exports =conn;
