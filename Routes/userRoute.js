const { getAllUser, updateuser, deleteUser } = require('../Controllers/userController');
const { authMiddleware } = require('../middlewire/auth');

const userRoute = require('express').Router();

userRoute.get('/',authMiddleware,getAllUser);
userRoute.put('/:userId', authMiddleware, updateuser);
userRoute.delete('/:userId', authMiddleware, deleteUser)

module.exports = userRoute;