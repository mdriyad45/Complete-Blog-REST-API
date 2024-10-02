const User = require('../models/userModel');
const bcrypt = require('bcrypt');

//get all user
exports.getAllUser = async (req, res) =>{
    try {
        const user = await User.find();

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(401).json({
            message: 'Something went wrong!',
        })
    }
}

exports.updateuser = async(req, res, next)=>{
    const userId = req.params.userId;


    try {
        const user = await User.findById(userId);
        console.log(user);

        if(!user){
            return res.status(400).json({
                message: 'Wrong User!',
            });
        }

        req.body.password = await bcrypt.hash(req.body.password, 11);

        const updateUser = await User.findByIdAndUpdate(userId, req.body, {new: true});

        res.status(200).json({
            messege: 'Profile Updated successfully',
            updateUser
        })
    } catch (error) {
        console.error(error);
        res.status(401).json({
            message: 'you can update only your account'
        })
    }
}

exports.deleteUser = async (req, res, next) =>{
    try {
        const userId = req.params.userId;

    if(!userId){
        res.status(400).json({
            message: 'Wrong User!',
        })
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    res.status(200).json({
        message: "user delete successfull!",
        deletedUser
    })
    } catch (error) {
        res.status(401).json({
            message: "You can delete only your account!!!"
        })
    }
}