'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ServiceRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aptId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      catagory: {
        allowNull:false,
        type: Sequelize.STRING(100)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      requesterId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      buildingAdminId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ServiceRequests');
  }
};
