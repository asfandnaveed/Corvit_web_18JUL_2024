import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import cors from "cors";


dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1/user', userRouter);




const PORT = process.env.PORT || 5011;


app.listen(PORT,()=>console.log('Server is Running on ',PORT));