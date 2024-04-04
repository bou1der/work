const express = require('express');
const adminController = require('../controllers/adminController')
const router = express.Router();
const JsonParser = express.json()

router.post('/contacts',JsonParser,(res,req,next)=>{
    adminController.createPortfolio(req,res,next)
})
router.post('/skills',JsonParser,(req,res,next)=>{
    adminController.createSkill(req,res,next)
})
router.post('/portfolio',JsonParser,(req,res,next)=>{
    adminController.createPortfolio(req,res,next)
})

module.exports = router