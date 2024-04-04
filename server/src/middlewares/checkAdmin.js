const bcrypt = require('bcrypt')
module.exports.AdminCheck = (req,res,next) =>{
    try{
        const header = req.header.authorization
        if (!header){
            return next( res.status(403).json({message:'неверный пароль'}));
        }
        const salt = bcrypt.genSalt(process.env.SALT)
        console.log(bcrypt.hash(process.env.PASSWORD,salt))
        next()
    }catch (e){
        res.status(500).json({error:e})
        console.log(e)
    }
}