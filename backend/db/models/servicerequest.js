'use strict';
const User = require("./user")
const Apt = require("./apt")
const Comment = require("./comment")
module.exports = (sequelize, DataTypes) => {
  const ServiceRequest = sequelize.define('ServiceRequest', {
    aptId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    catagory: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description:{
      type:DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    requesterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    buildingAdminId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});


  ServiceRequest.associate = function(models) {
    ServiceRequest.hasMany(models.Comment, {foreignKey: 'serviceRequestId'})
    ServiceRequest.belongsTo(models.User, {foreignKey: 'buildingAdminId'});
    ServiceRequest.belongsTo(models.User, {foreignKey: 'requesterId'});
    ServiceRequest.belongsTo(models.Apt,{foreignKey: 'aptId'})


  };

  return ServiceRequest;
};
