const express = require('express');
const AppError = require('../utils/AppError');
const authenticated = require('../middleware/authenticated');

const { tryCatch } = require('../utils/tryCatch');
const { getUsers } = require('../service/users.service');


const router = express.Router();

const userController = tryCatch(async (req, res, next) => {
  const users = undefined;
  if (!users) {
    throw new AppError(404, 'No users found')
  }
  res.status(200).json(users);
});


router.get('/user', authenticated, userController);

module.exports = router;