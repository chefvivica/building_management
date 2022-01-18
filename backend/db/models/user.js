'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');
const Servicerequest = require("./servicerequest");
const Apt = require("./apt");
const Comment = require("./comment")

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    },
  );
  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, email, role } = this; // context will be the User instance
    return { id, email, role };
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  User.login = async function ({ credential, password }) {
    // const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {email: credential},
    });

    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };
  User.signup = async function ({email, password, role }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email,
      hashedPassword,
      role
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.associate = function(models){
    User.hasMany(models.Apt, { foreignKey: 'userId'})

    User.hasMany(models.ServiceRequest,{ foreignKey: 'buildingAdminId'})

    User.hasMany(models.ServiceRequest,{ foreignKey: 'requesterId' })


    User.hasMany(models.Comment, { foreignKey: 'userId'})

  }

  return User;
};
