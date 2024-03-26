const {DataTypes, Sequelize} = require('sequelize')
const SequelizeConnect = require('./sequelize-connect')

const Message = SequelizeConnect.define('messages',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    toChat:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    text:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    date_stamp:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    }
}) 

module.exports = Message