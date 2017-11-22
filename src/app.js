const express = require('express');

const routes = require('./routes');
const { authorize } = require('./auth');

const app = express();

app
  .use('/api', authorize, routes);

module.exports = app;
