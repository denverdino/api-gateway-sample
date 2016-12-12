'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/hello', function (req, res) {
  res.send('Hello world\n');
});

app.get('/test', function (req, res) {
  res.send('Test\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
