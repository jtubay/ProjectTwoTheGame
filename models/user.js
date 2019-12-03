'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    class: DataTypes.STRING

  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};