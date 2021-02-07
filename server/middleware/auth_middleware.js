const admin = require('../firebase/firebase_admin');
const createError = require('http-errors');

const authMiddleware = (req, res, next) => {
  const headerToken = req.headers.authorization;
  if (!headerToken) {
    return next(createError(401, 'No token provided'));
  }

  if (headerToken && headerToken.split(' ')[0] !== 'Bearer') {
    return next(createError(401, 'Invalid token'));
  }

  const token = headerToken.split(' ')[1];

  admin
    .auth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() => {
      return next(createError(403, 'Could not authorize'));
    });
};

module.exports = authMiddleware;
