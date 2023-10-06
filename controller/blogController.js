const { log } = require("console");

module.exports.blogs = (req, res) => {
    log("Controoler is working fine ");
    res.send("Hello, World");
}

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