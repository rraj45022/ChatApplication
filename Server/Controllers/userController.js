const express = require('express');
const UserModel = require('../Modals/userModel');
const expressAsynchandler = require('express-async-handler');
const generateToken = require('../Config/generateToken');

const loginController = expressAsynchandler(async(req,res) =>{
    const {name, password} = req.body;
    const user = await UserModel.findOne({name});
    if (user && (await user.matchPassword(password))){
        res.json({
            _id : user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }
    else{
        res.status(401);
        throw new Error("Invalid username or password")
    }
    
});

const registerController = expressAsynchandler (async(req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.send(400);
        throw Error("All necessary input fields not been filled")
    }
    //pre-existing user
    const userExist = await UserModel.findOne({email});
    if (userExist){
        throw new Error("User already Exists");
    }
    const userNameExist = await UserModel.findOne({name});
    if(userNameExist){
        throw new Error(`The username ${name} is already in use`)
    };
    //create a new user and save it to the database
    const user = await UserModel.create({name, email, password});
    if (user){
        res.json({
            _id: user._id,
            name : user.name ,
            email:  user.email,
            isAdmin : user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else{
        res.send(400);
        throw new Error("Registration Error");
    }
});

const fetchAllUsersController = expressAsynchandler(async (req,res)=>{
    const keyword = req.query.search
    ?{
        $or:[
            {name: {$regex: req.query.search, $options:"i"}},
            {email:{$regex: req.query.search, $options:"i"}}
        ]
     }
    :{};
    const users = await UserModel.find(keyword).find({
        _id: {$ne: req.user._id},
    });
    res.send(users);
    }
);

module.exports = {loginController, registerController, fetchAllUsersController};