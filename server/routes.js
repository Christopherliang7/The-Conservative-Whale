const router = require('express').Router();
const PostsController = require('./controllers/postcontroller.js');

router.get('/posts', PostsController.getPosts);
router.post('/posts', PostsController.postPost);

module.exports = router;
