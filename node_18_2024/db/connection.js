import mysql from "mysql2/promise";
import dotenv from "dotenv";




const connection  = await mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'corvit_18_2024'
});


export {connection}