'use strict';
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
    // associations can be defined here
  };
  return ServiceRequest;
};
