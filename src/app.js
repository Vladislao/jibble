const express = require('express');

const routes = require('./routes');
const { authorize } = require('./auth');
const cache = require('./cache');
const throttle = require('./throttle');

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

// Throttle usage example
// let count = 5;
// setInterval(() => { count += 1; }, 1000);
// app.use(throttle(() => {
//   count -= 1;
//   return count > 0;
// }));

app
  .use(authorize)
  .use(throttle())
  .use(cache())
  .use('/api', routes)
  .use((err, req, res, next) => {
    console.error(err);

    res.status(500).end();
  });



module.exports = app;
