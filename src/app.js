const express = require('express');

const routes = require('./routes');
const { authorize } = require('./auth');

const app = express();

app
  .use('/api', authorize, routes)
  .use((err, req, res, next) => {
    // log error
    console.error(err);

    res.status(500).end();
  });

module.exports = app;
