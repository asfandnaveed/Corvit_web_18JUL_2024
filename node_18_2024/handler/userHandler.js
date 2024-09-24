import { userData,userAuth } from "../db/queries.js";


export const getUsers = async (req,res)=>{

    const user =await userData();

    res.send(user);
};
export const createUser = async (req,res)=>{};


export const userLogin = async(req,res)=>{

    const result = await userAuth(req);
    res.send(result);

};