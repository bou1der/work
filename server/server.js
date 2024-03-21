const express = require('express')
const testRout = require('./src/routes/test')
const app = express();

app.use("/api/test/",testRout)

module.exports = app;