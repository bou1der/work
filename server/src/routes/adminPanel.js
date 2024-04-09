const express = require('express');
const adminController = require('../controllers/adminController')
const router = express.Router();
const JsonParser = express.json()
const upload = require('../middlewares/file.upload.middleware')

router.post('/skills', upload.single('image'), (req,res,next)=>{
    adminController.createSkill(req,res,next)
})
router.post('/contacts', upload.single('image'),  (req,res,next)=>{
    adminController.createContact(req,res,next)
})
router.post('/portfolio', upload.single('image'),(req,res,next)=>{
    adminController.createPortfolio(req,res,next)
})

module.exports = router