const { Router } = require('express');

const posts = require('./controllers/posts');
const collection = require('./controllers/collection');
// const albums = require('./controllers/albums');
// const users = require('./controllers/users');

const router = new Router();

router
  // .use('/albums', albums)
  .use('/collection', collection)
  .use('/posts', posts);

module.exports = router;
