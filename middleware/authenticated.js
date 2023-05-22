const AppError = require('../utils/AppError');

const authenticated = (req, res, next) => {
  const isAuthenticated = req.headers.authorization;
  
  if (!isAuthenticated) {
    throw new AppError(401, 'unauthorized request');
  }

  next();
}

module.exports = authenticated;