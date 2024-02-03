const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();



const connectDb = async()=>{
    try{
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("database is conneced to server");
}
catch(err){
    console.error(err.message);
}
}

connectDb();
app.get("/", (req,res)=>{
    res.send("Hello World!");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req,res)=>{
    console.log("Server is running on port 3000");
});