const expressAsyncHandler = require("express-async-handler");
const Message = require("../Modals/messageModel");
const User = require("../Modals/userModel");
const Chat = require("../Modals/chatModel");


const allMessages = expressAsyncHandler(async (req,res)=>{
    try{
        const messages = await Message.find({chat: req.params.chatId})
        .populate("sender", "name email")
        .populate("reciever")
        .populate("chat")
    res.json(messages);
    }
    catch(error){
        res.status(400);
        throw new Error(error.message);
    }
})

const sendMessage = expressAsyncHandler(async (req,res)=>{
    const {content, chatId} = req.body;

    if(!content || !chatId){
        return  res.status(400).send({msg:"Please provide content and chat id"});
    }
    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId
    };

    try{
        var message = await Message.create(newMessage);
        message = await message.populate("sender","name");
        message = await message.populate("chat");
        message = await User.populate(message, {
            path: "chat.users",
            select: "name email",
        });
        await Chat.findByIdAndUpdate(req.body.chatId, {latestMessage: message});
        res.json(message);
    }
    catch(err) {
        res.status(400);
        throw new Error(error.message);
    }
})

module.exports = {allMessages, sendMessage};