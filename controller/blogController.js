const { log } = require("console");
const Post = require('../models/Blog');
module.exports.blogs = (req, res) => {
    log("Controoler is working fine ");
    res.send("Hello, World");
}
log("Controller Is On Duty");
// Create A Blog Post 
module.exports.create = async (req,res) => {
    try{
        const newPost = new Post(req.body);
        log(req.body);
        const post = await newPost.save();
        res.status(201).json(post);
    }catch(err) {
        log("Error in Creating Post ");
        res.status(400).json({error: err.message});
    }
}

// Read All Blog Post
module.exports.allPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(err){
        log(`Error in Reading All Post ${err}`);
        res.status(500).json({error: err.message});
    }
}

//  get Specific Blog Post Using id
module.exports.post = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({error: "Post Not Found"});
        }
        res.status(200).json(post);
    }catch(err){
        log(`Error in getting Specific Blog Post Using It's Id`);
        res.status(500).json({error: err.message});
    }
}