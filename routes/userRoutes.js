const router = require('express').Router();
const passport = require('passport');
const { User, Post } = require('../models');

const jwt = require('jsonwebtoken');

require('dotenv').config();

// Get one user
// router.get('/users/:id', (req, res) => {
//   User.findById(req.params.id)
//   .populate('items')
//   .then(user => res.json(user))
//   .catch(e => console.log(e))
// });

// router.post('/users', (req, res) => {
//   .then(() => res.sendStatus(200))
//   .catch(e => console.log(e));
// });

router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) throw err;
    res.json({
      isLoggedIn: !!user,
      posts: user.posts,
      user: user.username,
      token: jwt.sign({ id: user._id }, process.env.SECRET)
    });
  })
})

router.post('/users/register', (req, res) => {
  User.register(new User({
    username: req.body.username,
    email: req.body.email
  }), req.body.password, err => {
    if (err) throw err;
    res.sendStatus(200);
  })
})

router.get('/users', passport.authenticate('jwt'), (req, res) => {
  User.find({_id: req.user._id})
  .then((user) => res.json(user))
  .catch(e => console.error(e));
})

router.get('/users/posts', passport.authenticate('jwt'), (req, res) => {
  Post.find({owner: req.user._id})
  .then((posts) => res.json(posts))
  .catch(e => console.error(e));
})


module.exports = router;