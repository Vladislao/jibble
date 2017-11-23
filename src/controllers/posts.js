const { Router } = require('express');
const request = require('request-promise-native');
const config = require('config3');

const router = new Router();

router
  .get('/', async (req, res, next) => {
    try {
      const result = await request.get({ url: `${config.SOURCE}/posts`, json: true });
      return res.send(result);
    } catch (e) {
      return next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const result = await request.get({ url: `${config.SOURCE}/posts/${req.params.id}`, json: true });

      return res.send(result);
    } catch (e) {
      return next(e);
    }
  })

  .post('/', (req, res, next) => {
    try {
      return req.pipe(request(`${config.SOURCE}/posts`)).pipe(res);
    } catch (e) {
      return next(e);
    }
  })

  .put('/:id', (req, res, next) => {
    try {
      return req.pipe(request(`${config.SOURCE}/posts/${req.params.id}`)).pipe(res);
    } catch (e) {
      return next(e);
    }
  })

  .patch('/:id', (req, res, next) => {
    try {
      return req.pipe(request(`${config.SOURCE}/posts/${req.params.id}`)).pipe(res);
    } catch (e) {
      return next(e);
    }
  })

  .delete('/:id', (req, res, next) => {
    try {
      return req.pipe(request(`${config.SOURCE}/posts/${req.params.id}`)).pipe(res);
    } catch (e) {
      return next(e);
    }
  });

module.exports = router;
