const { Router } = require('express');
const request = require('request');
const config = require('config3');

const router = new Router();

router
  .get('/', (req, res, next) => {
    try {
      return req.pipe(request(`${config.SOURCE}/posts`)).pipe(res);
    } catch (e) {
      return next(e);
    }
  })

  .get('/:id', (req, res, next) => {
    try {
      return req.pipe(request(`${config.SOURCE}/posts/${req.params.id}`)).pipe(res);
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
