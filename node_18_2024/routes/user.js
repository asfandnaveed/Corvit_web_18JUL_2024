import { Router } from "express";
import { createUser, getUsers } from "../handler/userHandler.js";



const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.post('/create',createUser);



export default userRouter;