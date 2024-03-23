const {DataTypes, Sequelize} = require('sequelize')
const SequelizeConnect = require('./sequelize-connect')

const Contacts = SequelizeConnect.define('contacts',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    image_dir:{
        type:DataTypes.CHAR,
        allowNull:false
    },
    contact_text:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    connect_link:{
        type:DataTypes.TEXT,
        allowNull:false,
    }
})

module.exports = Contacts