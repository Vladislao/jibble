module.exports.authorize = (req, res, next) => {
  if (req.headers.Authorization && req.headers.Authorization === 'Bearer af24353tdsfw') {
    return next();
  }
  return res.status(501).end();
};
