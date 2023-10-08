const router = require('express').Router();
const { log } = require('console');
log("Router is detatced ");
const blogController = require('../controller/blogController');

router.get('/', blogController.blogs);

// Create Blog Post 
router.post('/create', blogController.create);

// Read all post routes 
router.get('/allPosts', blogController.allPosts);

// read specific Blog Using title
router.get('/post/:title', blogController.getOnePost);
module.exports = router;