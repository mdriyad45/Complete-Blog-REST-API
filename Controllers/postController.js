const Post = require("../models/postModel");

//create post

exports.createPost = async(req, res, next)=>{
    const {title, username, body, category, photo} = req.body;

    try {
        const post = await Post.create({
            title,
            body,
            username,
            category,
            photo
        })

        res.status(201).json(post)
    } catch (error) {
        res.status(401).json({
            message: "Something went wrong!",
        })
    }
}

//get all post by query

exports.getAllPost = async (req, res, next)=>{
    const {username, category} = req.query;
    try {
        let posts;

        if(username){
            posts = await Post.find({username});
        }
        else if(category){
            posts = await Post.find({category:{
                $in: [category],
            }})
        }
        else{

             posts = await Post.find();
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(401).json({
            message: "Something went wrong",
        })
    }
}

//get single post

exports.getSignlePost = async (req, res) =>{
    const postId = req.params.postId;

    try {
        const post = await Post.findById(postId);

        if(!post){
            return res.status(401).json({
                message:"Post not found",
            })
        }

        res.status(200).json({
            post
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "something went wrong"
        })
        
    }
}

//update Post
exports.updatePost = async (req, res, next)=>{
    const postId = req.params.postId;

    try {
        const post = await Post.findById(postId);

        if(!post){
            return res.status(401).json({
                message: "Post not found!",
            })
        }

        const updatePost = await Post.findByIdAndUpdate(postId,req.body, { new: true});

        res.status(401).json({
            message: "Post update successfully",
            updatePost
        });
        
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message: "You can update only on your post!",
        })
    }
}

//delete post

exports.deletePost = async (req, res, next) =>{
    const postId = req.params.postId;

    try {
        const post = await Post.findById(postId);

        if(!post){
            res.status(400).json({
                Message: "post not found",
            })
        }

         await Post.findByIdAndDelete(post);

        res.status(200).json({
            message: "post delete successfull!",

        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "You can delete only your post"
        })
    }
}