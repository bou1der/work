module.exports.createSkill = async (req,res,next) =>{
    try{
        res.status(200).json({admin:true})
    }catch (e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}
module.exports.createPortfolio = async (req,res,next) =>{
    try{
        res.status(200).json({admin:true})
    }catch (e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}
module.exports.createContact = async (req,res,next) =>{
    try{
        res.status(200).json({admin:true})

    }catch (e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}
module.exports.loginAdmin = async (req,res,next) =>{
    try{
        
    }catch(e){
        res.status(500).json({error:`${e}`})
        console.log(e)
    }
}