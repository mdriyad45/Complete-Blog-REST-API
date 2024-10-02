const { signup } = require('../../Controllers/authjControllers/signup');

const signupRoute = require('express').Router();

signupRoute.post('/', signup);

module.exports = signupRoute;