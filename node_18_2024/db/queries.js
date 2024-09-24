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