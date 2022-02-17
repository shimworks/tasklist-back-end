const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));

app.use(require('./routes'));

app.use(express.static('public'));

module.exports = app;
