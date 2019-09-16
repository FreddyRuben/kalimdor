'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', require('./routes/index.routes'));

module.exports = app;