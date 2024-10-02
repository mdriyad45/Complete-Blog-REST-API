const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        default: "admin"
    },
    category : {
        type: Array,
        required: false
    },
    photo : {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const postModle = mongoose.model("Post",postSchema);

module.exports = postModle