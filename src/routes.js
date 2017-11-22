const { Router } = require('express');

const posts = require('./controllers/posts');
const albums = require('./controllers/albums');
const users = require('./controllers/users');

const router = new Router();

router
  // .use('/albums', albums)
  // .use('/users', users)
  .use('/posts', posts);

module.exports = router;
