const Portfolio = require("../models/portfolio-model")
const Contacts = require("../models/contacts-model")
const Skills = require("../models/skills-model")
const bcrypt = require("bcrypt")
const fs = require('fs')
module.exports.getContacts = async (req,res) =>{
    try{
        const SendData = []
        const MyContacts = await Contacts.findAll()
        MyContacts.map((contact)=>{
            const image = fs.readFileSync(`${contact.dataValues.image_dir}`)
            SendData.push({id:contact.dataValues.id, image:`${image}` ,text:contact.dataValues.contact_text,link:contact.dataValues.connect_link})
        })
        res.status(200).json(SendData)
    }catch (err){
        res.status(500).json({
            error:err
        })
        console.log(err)
    }
}
module.exports.getPortfolio = async (req,res) =>{
    try{
        const SendData = [];
        const works = await Portfolio.findAll() 
        works.map((el)=>{
            const image = fs.readFileSync(el.dataValues.image_dir)
            SendData.push({
                id:el.dataValues.id,
                name:el.dataValues.name,
                gitLink:el.dataValues.github_link,
                figmaLink:el.dataValues.figma_link,
                image:image
            }) 
        })
        res.status(200).json(SendData)
    }catch (err){
        res.status(500).json({
            error:err
        })
        console.log(err)
    }
}
module.exports.getSkills = async (req,res) =>{
    try{
        const SendData = [];
        const skills = await Skills.findAll()
        skills.map((skill)=>{
            const image = fs.readFileSync(skill.dataValues.image_dir)
            SendData.push({
                id:skill.dataValues.id,
                name:skill.dataValues.name,
                image,
                text:JSON.parse(skill.dataValues.text),
                percent:skill.dataValues.percent,
                rgb:JSON.parse(skill.dataValues.rgb)
            })
        })
        res.status(200).json(SendData)
    }catch (err){
        res.status(500).json({
            error:err
        })
        console.log(err)
    }
}
module.exports.adminLogin = async (req,res) =>{
    try{
        const password = req.body.password
        if(!bcrypt.compareSync(password,process.env.PASSWORD)){
            return(res.status(403).json({message:'неверный пароль'}))
        }
        
        res.status(200).json({password})
    }catch (err){
        res.status(500).json({
            error:err
        })
        console.log(err)
    }
}