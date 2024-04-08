const multer = require('multer')

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,'src/temp/')
    },
    filename(req,file,cb){
        cb(null,`${new Date().toDateString()}__${file.originalname}`)
    }
})
const filterTypesFiles = ['image/png','image/jpg','image/jpeg']

const fileFilter = (req,file,cb) =>{
    if (filterTypesFiles.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

module.exports = multer({storage,fileFilter})
