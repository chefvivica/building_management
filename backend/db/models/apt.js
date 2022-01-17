'use strict';
module.exports = (sequelize, DataTypes) => {
  const Apt = sequelize.define('Apt', {
    userId:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {});
  Apt.associate = function(models) {
    Apt.belongsTo(User);
  };
  return Apt;
};
