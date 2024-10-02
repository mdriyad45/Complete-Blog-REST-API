const { createPost, getAllPost, updatePost, deletePost, getSignlePost } = require('../Controllers/postController');
const { authMiddleware } = require('../middlewire/auth');

const postRoute = require('express').Router();

postRoute.post('/',authMiddleware, createPost);
postRoute.get('/',authMiddleware, getAllPost);
postRoute.get('/:postId', authMiddleware, getSignlePost);
postRoute.put('/:postId', authMiddleware, updatePost);
postRoute.delete('/:postId', authMiddleware, deletePost);

module.exports = postRoute;