'use strict';
module.exports = (sequelize, DataTypes) => {
  const SeriveRequest = sequelize.define('SeriveRequest', {
    aptId: DataTypes.INTEGER,
    catagory: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    requesterId: DataTypes.INTEGER,
    buildingAdminId: DataTypes.INTEGER,
    createdAt: DataTypes.NOW
  }, {});
  SeriveRequest.associate = function(models) {
    // associations can be defined here
  };
  return SeriveRequest;
};