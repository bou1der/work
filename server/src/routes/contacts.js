const express = require('express');
const jsonParser = express.json()
const router = express.Router();
// controllers
const contacts = require('../controllers/contactsController');

router.get('/getContent', jsonParser, (req,res)=>{
    contacts.getContent(req,res)
})

module.exports = router