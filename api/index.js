import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log('mongoDb is connected');
    }
)
.catch((err) => {
    console.log(err);
});


const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("working");
});


app.get("/test", (req,res) => {
    res.json({message:"API is working"});
} )
