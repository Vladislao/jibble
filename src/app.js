const express = require('express');

const routes = require('./routes');
const { authorize } = require('./auth');
const cache = require('./cache');

/*
 * Server configuration
*/
const app = express();

// Cache usage example
// const store = {};
// app.use(cache(
//   key => store[key],
//   (key, body) => { store[key] = body; },
// ));

app
  .use(authorize)
  .use(cache())
  .use('/api', routes)
  .use((err, req, res, next) => {
    // log error
    console.error(err);

    res.status(500).end();
  });



module.exports = app;
