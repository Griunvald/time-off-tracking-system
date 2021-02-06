require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const createError = require('http-errors');

const authRoutes = require('./routes/auth_routes');
const error = require('./middleware/error_middleware');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, useUnifiedTopology: true }));
app.use(morgan('dev'));
app.use(
  cors({
    origin: process.env.CORS_URL,
  })
);

authRoutes(app);

app.all('*', (req, res, next) => {
  return next(createError(404, 'Oops! Page not found.'));
});

app.use(error);

module.exports = app;
