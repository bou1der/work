const bcrypt = require('bcrypt')
module.exports.AdminCheck = (req,res,next) =>{
    try{
        const header = req.headers.authorization
        if(!header){
            return next(res.status(404).json({message:'пустой пароль'}))
        }
        if(!bcrypt.compareSync(header,process.env.PASSWORD)){
            return next( res.status(403).json({message:'неверный пароль'}));
        }
       
        next()
    }catch (e){
        res.status(500).json({error:e})
        console.log(e)
    }
}