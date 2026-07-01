const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect('connection-string-here')
    console.log("Database connected successfully");
}


module.exports = connectDB