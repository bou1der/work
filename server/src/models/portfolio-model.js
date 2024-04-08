const {DataTypes, Sequelize} = require('sequelize')
const SequelizeConnect = require('./sequelize-connect')

const Portfolio = SequelizeConnect.define('portfolio',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.CHAR,
        allowNull:false
    },
    github_link:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    figma_link:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    image_dir:{
        type:DataTypes.CHAR,
        allowNull:false
    }
}) 

module.exports = Portfolio