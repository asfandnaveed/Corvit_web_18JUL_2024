import { connection } from "./connection.js";



export const userData = async ()=>{
    try{

        const sqlQuery = 'SELECT * FROM `users`';

        const [result] = await connection.query(sqlQuery);
        console.log('data: ',result);

        return result;
    }catch(e){

    }
};

export const userAuth = async (req)=>{
    try{
        const sqlQuery = "SELECT * FROM `users` WHERE email=? AND `password`=? ";
        const [result] = await connection.query(sqlQuery,[req.body.email,req.body.password]);
        console.log('data: ',result);
        return result;
    }catch(e){

    }
};