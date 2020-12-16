const { modelsGetPosts, modelsPostPost } = require('../models/postmodel.js');

module.exports = {
  getPosts: (req, res) => {
    modelsGetPosts((error, result) => {
      if (error) {
        console.log('Error with getting Posts from Controller: ', error);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  },
  postPost: (req, res) => {
    const params = [req.body.title, req.body.description];
    modelsPostPost(params, (error, result) => {
      if (error) {
        console.log('Error with posting Post from Controller: ', error);
        res.sendStatus(500);
      } else {
        res.send();
      }
    });
  }
}