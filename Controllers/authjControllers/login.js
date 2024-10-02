const User = require("../../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({
                message: "Username not found"
            });
        }

        
             const passwordValidate = await bcrypt.compare(password, user.password);
             if(!passwordValidate){
                return res.status(400).json({
                    message: "Password doesn't match",
                })
             }

             const token = jwt.sign({username: user.username}, process.env.PRIVET_KEY,{expiresIn:'24h'});

             res.status(200).json({
                message: 'login successfull',
                token: token,
             })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Not found!",
        })
    }
}