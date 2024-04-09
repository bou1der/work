const Skill = require('../models/skills-model')
const Portfolio = require('../models/portfolio-model')
const Contact = require('../models/contacts-model')
module.exports.createSkill = async (req,res) =>{
    try{
        const {name,percent,r,g,b} = req.body
        const text = ['1','2','3','4','5']
        const data = await Skill.create({name,image_dir:req.file.path,text,percent,rgb:[r,g,b]})
        if (!data){
            return res.status(500).json(data)
        }
        res.status(200).json({admin:true})
    }catch (e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}
module.exports.createPortfolio = async (req,res) =>{
    try{
        const {name,github,figma} = req.body
        const data = await Portfolio.create({name,image_dir:req.file.path,figma_link:figma,github_link:github})
        if (!data){
            return res.status(500).json(data)
        }

        res.status(200).json({admin:true})
    }catch (e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}
module.exports.createContact = async (req,res) =>{
    try{
        const {name,link} = req.body
        const data = await Contact.create({contact_text:name,image_dir:req.file.path,connect_link:link})
        if (!data){
            return res.status(500).json(data)
        }

        res.status(200).json({admin:true})
    }catch (e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}