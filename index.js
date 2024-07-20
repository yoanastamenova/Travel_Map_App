import mongoose from 'mongoose';
import express from 'express';
import 'dotenv/config';
import rootRouter from './router.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.get('/home', (req, res) => {
    res.json({
        success: true,
        message: "Welcome to home page!"
    });
});

app.use('/api', rootRouter);

mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("MongoDB Connected!");
    })
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})