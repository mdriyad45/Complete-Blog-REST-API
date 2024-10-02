const Category = require('../models/categoryModel');

exports.createCategory = async (req, res) =>{
    const {name} = req.body;

    try {
        const category = await Category.create({
            name
        })

        res.status(201).json(category)
    } catch (error) {
        res.status(401).json({
            message: "Something went wrong!",
        })
    }
}

//get Category

exports.getAllCategory = async (req, res)=>{
    try {
        const category = await Category.find();

        res.status(201).json(category);
    } catch (error) {
        message: "Something went wrong!",
        error
    }
}