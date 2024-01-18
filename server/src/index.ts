import { config } from 'dotenv';
config();

import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';

import Quiz from './models/Quiz';
// import Login from './models/Login';


const PORT = 5000;

const app = express();

// '*' Allows request from any origin for now
app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());

app.post("/quizzes", async (req: Request, res: Response) => {
    console.log(req.body);
    const newQuiz = new Quiz({
        title: req.body.title,
        description: req.body.description,
    });
    const createdQuiz = await newQuiz.save();
    res.json(createdQuiz);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(5000);
});

