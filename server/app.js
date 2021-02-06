require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./routes/auth_routes');

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

module.exports = app;
