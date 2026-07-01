const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect(process.env.DATABASE_KEY);
    console.log("Database connected")
}

module.exports = connectDB