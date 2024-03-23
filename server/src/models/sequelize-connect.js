const Sequelize = require('sequelize')
const config = require('../../config.json')

const SequelizeConnect = new Sequelize(`${config.db.database}`, `${config.db.user}` , `${config.db.password}`, {
    host:`${config.db.host}`,
    dialect:'mysql'
})

try{
    if(SequelizeConnect.authenticate()){
        console.log("Connection database +")
    }
}catch (e){
    console.log(e)
}
module.exports = SequelizeConnect