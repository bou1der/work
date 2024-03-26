const {DataTypes, Sequelize} = require('sequelize')
const SequelizeConnect = require('./sequelize-connect')

const Chat = SequelizeConnect.define('chats',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.CHAR,
        allowNull:false
    }
})

module.exports = Chat