const User = require("../../models/userModel");
const bcrypt = require('bcrypt')
 
 exports.signup= async (req, res, next)=>{
     
     try {
         req.body.password = await bcrypt.hash(req.body.password, 11);
         const {name, username, email, password, profile} = req.body;
        console.log(req.body.password);

        const user = await User.create({
        name,
        username,
        email,
        password,
        profile,
        });
        console.log("User created successfully:", user)
        res.status(201).json({
            message: `Hello ${name}! Your account has been created!`, user
        });
    } catch (error) {
        console.error('Error creating user', error)
        res.status(401).json({
            messege: "Something went wrong!",
        })
    }
} 

