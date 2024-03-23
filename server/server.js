const express = require('express')
const contacts = require('./src/routes/contacts')
const app = express();
const cors = require("cors")
app.use(cors({
    origin:"*"
}))
app.use("/api/contacts",contacts)

module.exports = app;