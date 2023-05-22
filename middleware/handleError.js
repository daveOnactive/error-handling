const AppError = require('../utils/AppError');

const handleError = (err, req, res, next) => {

  console.log('ERROR: ', err);
  
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ 
      message: err.message, 
      status: err.status 
    });
  }

  res.status(500).json({ 
    message: 'Internal Server Error', 
    status: 500 
  });
}

module.exports = handleError;