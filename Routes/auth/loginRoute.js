const { login } = require('../../Controllers/authjControllers/login');

const loginRoute = require('express').Router();
loginRoute.post('/',login);

module.exports = loginRoute;