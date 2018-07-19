const Sequelize = require('sequelize');
const db = require('./database');
const crypto = require('crypto');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: false,
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    get() {
      return () => this.getDataValue('password');
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt');
    }
  }
});

module.exports = User;

//Instance Methods
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

//Class Methods
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
}

//Lifecycle Hooks
const setSaltAndPassword = (user) => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);