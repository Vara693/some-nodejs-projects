const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    image: String,
    caption: String,
})


const postModel = mongoose.model("post", postSchema); //"post" here is just the name of the collection for which the the schema belongs
module.exports = postModel