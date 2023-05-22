const express = require('express');
const handleError = require('./middleware/handleError');
const AppError = require('./utils/AppError');
const UserRoute = require('./routes/user.route');

const app = express();
const PORT = 3000;

app.use(UserRoute);

app.get('/', (req, res) => {
  res.send('Welcome to error handling in Express :)');
});

app.get('*', (req, res) => {
  throw new AppError(400, 'Invalid endpoint');
});

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});