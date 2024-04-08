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
        res.status(200).json({admin:true})
    }catch (e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}
module.exports.createContact = async (req,res) =>{
    try{

        res.status(200).json({admin:true})
    }catch (e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}