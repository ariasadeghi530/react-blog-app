const router = require('express').Router();
const passport = require('passport');

const { Post, User } = require('../models');



// Get all posts
router.get('/posts', passport.authenticate('jwt'), (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch(e => console.log(e));
});





module.exports = router;