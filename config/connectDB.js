const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('database connect successfully');
    } catch (error) {
        console.log("database connection fill");
    }
};

module.exports = connectDB