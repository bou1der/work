const Portfolio = require("../models/portfolio-model")
const Contacts = require("../models/contacts-model")
const fs = require('fs')
module.exports.getContacts = async (req,res) =>{
    try{
        let SendData = []
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
        let SendData = [];
        const works = await Portfolio.findAll() 
        works.map((el)=>{
            console.log(el.dataValues.image_dir )
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

    }catch (err){
        res.status(500).json({
            error:err
        })
        console.log(err)
    }
}