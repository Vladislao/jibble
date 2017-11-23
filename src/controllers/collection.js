const { Router } = require('express');
const request = require('request-promise-native');
const config = require('config3');

const router = new Router();

router
  .get('/', async (req, res, next) => {
    try {
      const [posts, users, albums] = await Promise.all([
        request.get({ url: `${config.SOURCE}/posts/`, json: true }),
        request.get({ url: `${config.SOURCE}/users/`, json: true }),
        request.get({ url: `${config.SOURCE}/albums/`, json: true }),
      ]);

      const aggregation = [];
      for (let i = 0; i < 30; i += 1) {
        aggregation.push({
          post: posts[i % posts.length],
          user: users[i % users.length],
          album: albums[i % albums.length],
        });
      }

      return res.status(200).send(aggregation);
    } catch (e) {
      return next(e);
    }
  });

module.exports = router;
