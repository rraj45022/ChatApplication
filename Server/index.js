const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const cors = require('cors');
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));


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


app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);
const PORT = process.env.PORT || 3000;

const Server = app.listen(PORT, (req,res)=>{
    console.log("Server is running on port 3000");
});

const io = require("socket.io")(Server,{
    cors:{
        origin: 'http://localhost:5173',
        credentials: true,
      },
    pingTimeout: 60000,
});

io.on("connection", (socket)=>{
    socket.on("setup", (user)=>{
        socket.join(user.data._id)
        socket.emit("connected");
    });

    socket.on("join chat", (room)=>{
        socket.join(room)
    })

    socket.on("new message", (newMessageStatus)=>{
        var chat = newMessageStatus.chat;
        if(!chat.users){
            return console.log("chat.users not defined");

        }
        chat.users.array.forEach(user => {
            if(user._id == newMessageStatus.sender._id) return;

            socket.in(user._id).emit("message recieved", newMessageRecieved);
            
        });
    });
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
})