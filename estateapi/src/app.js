const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// User routes
// app.use('/users', userRoutes);

module.exports = app;
