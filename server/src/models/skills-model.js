const {DataTypes, Sequelize} = require('sequelize')
const SequelizeConnect = require('./sequelize-connect')

const Skills = SequelizeConnect.define('skills',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    image_dir:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    text:{
        type:DataTypes.JSON,
        allowNull:false,
    },
    percent:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    rgb:{
        type:DataTypes.JSON,
        allowNull:false,
    }
}) 

module.exports = Skills