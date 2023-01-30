import express, { urlencoded } from 'express';
import authRouter from './routes/auth.routes.js';
import cors from "cors";
import connectDb from './database/db.config.js';
const app = express();

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:5173"
}))

connectDb();

app.use("/auth", authRouter);

app.listen(4000)