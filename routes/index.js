const router = require('express').Router();
const { log } = require('console');
log("Router is detatced ");
const blogController = require('../controller/blogController');

router.get('/', blogController.blogs);

module.exports = router;