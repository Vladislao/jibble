/*
 * Provision for throttling
 * Requires a function `throttle` to be provided. Returns middleware.
 *
 * Function `throttle` should return `true` if request must be throttled, otherwise `false`
*/
module.exports = (throttle) => {
  if (throttle === undefined) return (req, res, next) => { next(); };

  return (req, res, next) => {
    const many = throttle(req);
    if (many) {
      return res.status(429).end();
    }
    return next();
  };
};
