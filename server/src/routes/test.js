const express = require('express');
const jsonParser = express.json()
const router = express.Router();
// controllers
const test = require('../controllers/testController');

router.post('/getContent',jsonParser, (req,res)=>{
    test.getContent(req,res)
})


module.exports = router;