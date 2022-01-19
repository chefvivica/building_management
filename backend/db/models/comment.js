'use strict';
const User = require("./user")
const ServiceRequest = require("./servicerequest")

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    serviceRequestId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {foreignKey: 'userId'});
    Comment.belongsTo(models.ServiceRequest, {foreignKey: 'serviceRequestId'})
  };


  return Comment;
};
