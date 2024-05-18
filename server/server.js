const express = require('express')
const content = require('./src/routes/getContent')
const admin = require('./src/routes/adminPanel')
const CheckAdmin = require('./src/middlewares/checkAdmin').AdminCheck
const app = express();
const cors = require("cors")
require('dotenv').config()
const bcrypt = require('bcrypt')


app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true,
    allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}))
app.use("/api/getContent",content)
app.use("/api/admin/create",CheckAdmin,admin)

module.exports = app;