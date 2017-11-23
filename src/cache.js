const crypto = require('crypto');

/*
 * Provision for caching
 * Requires functions `load` and `save` to be provided. Returns middleware.
 *
 * Function `load` should receive `key` and return `data` if found and `undefined` if not
 * Function `save` should receive `key` and `body`
*/
module.exports = (load, save) => {
  if (load === undefined) return (req, res, next) => { next(); };

  return (req, res, next) => {
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
};
