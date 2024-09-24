import { Router } from "express";
import { createUser, getUsers,userLogin } from "../handler/userHandler.js";



const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.post('/create',createUser);

userRouter.post('/login',userLogin);



export default userRouter;