
const Post = require('../models/Post');

exports.getAllPosts = async (req,res,next) => {
    res.send("Get All posts route");
};


exports.createNewPost = async (req,res,next) => {
    let post = new Post("First Post","body of first");
    post = post.save();
    console.log(post);
    res.send("Create New Post Route");
};


exports.getPostById = async (req,res,next) => {
    res.send("Get Post By Id") ;

};



