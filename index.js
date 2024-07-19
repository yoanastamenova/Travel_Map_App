import mongoose from 'mongoose';
import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT

mongoose
.connect(process.env.MONGO_URI, {})
.then(()=> {
 console.log("MongoDB Connected!");
})
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})