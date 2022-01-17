'use strict';
module.exports = (sequelize, DataTypes) => {
  const Apt = sequelize.define('Apt', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Apt.associate = function(models) {
    // associations can be defined here
  };
  return Apt;
};