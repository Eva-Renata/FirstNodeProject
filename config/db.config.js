import mysql from 'mysql';        //importerer mysql module
import dotenv from 'dotenv';      //importerer dotenv med oplysninger
dotenv.config();                  //variabler som ligger i dotenv , bliver skrevet ind i node

//connecting with mysql database
const db = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

db.connect();

export default db;
