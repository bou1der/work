const express = require('express')
const content = require('./src/routes/getContent')
const app = express();
const cors = require("cors")
app.use(cors({
    origin:"*"
}))
app.use("/api/getContent",content)

module.exports = app;