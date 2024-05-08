const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    email:{
      type: DataTypes.STRING,
    },
    password:{
      type: DataTypes.STRING,
    },
    salt:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    patronymic:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthday:{
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    info:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    country:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    city:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    street:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    house:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    frame:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    apartament:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    tableName: 'user'
  }
)

const NewsList = sequelize.define(
  'newslist',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    icon:{
      type: DataTypes.STRING,
      allowNull: true
    },
    title:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    text:{
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    tableName: 'newslist'
  }
)

//User.hasMany(NewsList, {foreignKey:'id'})
NewsList.belongsTo(User, {foreignKey:'user_id'})


const Courses = sequelize.define(
  'courselist',
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    icon:{
      type: DataTypes.STRING,
      allowNull: true
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: 'courselist'
  }
)
module.exports = {User, NewsList, Courses}



