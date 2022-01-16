'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        fullName: 'Demo Lition',
        email: 'demo@user.io',
        about: "I'm a demo user!",
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        username: 'FakeUser1',
        fullName: "Fake User 1",
        email: faker.internet.email(),
        about: "I have not filled this in!",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username: 'FakeUser2',
        fullName: "Fake User 2",
        email: faker.internet.email(),
        about: "I have not filled this in!",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
