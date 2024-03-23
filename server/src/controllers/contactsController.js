const Contacts = require("../models/contacts-model")
const fs = require('fs')
module.exports.getContent = async (req,res) =>{
    try{
        let SendData = []
        const MyContacts = await Contacts.findAll()
        MyContacts.map((contact)=>{
            const image = fs.readFileSync(`${contact.dataValues.image_dir}`)
            SendData.push({id:contact.dataValues.id, image:`${image}` ,text:contact.dataValues.contact_text,link:contact.dataValues.connect_link})
        })
        res.status(200).json(SendData)
    }catch (err){
        console.log(err)
    }
}