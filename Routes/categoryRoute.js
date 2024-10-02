const { createCategory, getAllCategory } = require('../Controllers/categroyController');
const { authMiddleware } = require('../middlewire/auth');

const categoryRoute = require('express').Router();

categoryRoute.post('/',authMiddleware, createCategory);
categoryRoute.get('/',authMiddleware,getAllCategory)

module.exports = categoryRoute;