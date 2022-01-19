'use strict';

const ServiceRequest = require("./servicerequest");
const User = require("./user")

module.exports = (sequelize, DataTypes) => {
  const Apt = sequelize.define('Apt', {
    userId:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {});
  Apt.associate = function(models) {
    Apt.hasMany(models.ServiceRequest, {foreignKey: 'aptId'})
    Apt.belongsTo(models.User, {foreignKey: 'userId'});
  }
  return Apt;
};
