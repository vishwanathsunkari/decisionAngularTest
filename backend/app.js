var express = require('express');
var app = express();


app.use((req, res, next) => {
  res.send('THis is Express');
})


module.exports = app;
