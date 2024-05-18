const express = require('express');
const jsonParser = express.json()
const router = express.Router();
// controllers
const content = require('../controllers/contentController');

router.get('/contacts', jsonParser, (req,res)=>{
    content.getContacts(req,res)
})
router.get('/portfolio', jsonParser, (req,res)=>{
    content.getPortfolio(req,res)
})
router.get('/skills', jsonParser, (req,res)=>{
    content.getSkills(req,res)
})
router.post('/comments',jsonParser,(req,res)=>{
    content.comments(req,res)
})
router.post('/writeComment',jsonParser,(req,res) =>{
    content.writeComments(req,res)
})
router.post('/adminLogin',jsonParser,(req,res)=>{
    content.adminLogin(req,res)
})

module.exports = router