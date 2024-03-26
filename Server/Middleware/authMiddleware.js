const jwt = require('jsonwebtoken');
const User = require('../Modals/userModel');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req,res, next)=>{
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        }
        catch(error){
            console.log("Error decoding token", error);
            res.status(401);
            throw new Error("Not authorized, please log in");
            }
        }
        if (!token){
            res.status(401);
            throw new Error("Not logged in, please login");
        }
    
});

module.exports = {protect};