require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const admin = require('firebase-admin');

const authRoutes = require('./routes/auth_routes');
const serviceAccount = require('./config/serviceAccountKey.json');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, useUnifiedTopology: true }));
app.use(morgan('dev'));
app.use(
  cors({
    origin: process.env.CORS_URL,
  })
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

authRoutes(app);

module.exports = app;
