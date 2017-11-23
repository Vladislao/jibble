const crypto = require('crypto');

/*
 * Provision for caching
 * Requires load and save functions to be provided. Returns cache middleware.
 *
 * Load function should receive key and return data if found and undefined if not
 * Save function should receive key and body
*/
module.exports = (load, save) => (req, res, next) => {
  if (req.method !== 'GET') return next();

  const md5 = crypto.createHash('md5');
  const key = md5.update(`__cache__${req.url}`).digest('hex');

  const value = load(key);
  if (value === undefined) {
    const { send } = res;
    res.send = (body) => {
      save(key, body);
      send.call(res, body);
    };
    return next();
  }

  return res.send(value);
};
