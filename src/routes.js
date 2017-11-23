const { Router } = require('express');

const posts = require('./controllers/posts');
const collection = require('./controllers/collection');

/*
 * Server routes
*/
const router = new Router();

router
  .use('/collection', collection)
  .use('/posts', posts);

module.exports = router;
