'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo_admin@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'demo_user1@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        role: 'Tenant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'demo_user2@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        role: 'Tenant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
