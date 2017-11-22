module.exports.authorize = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization === 'Bearer af24353tdsfw') {
    return next();
  }
  return res.status(501).end();
};
