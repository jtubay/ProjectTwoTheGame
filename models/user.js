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
    User.hasMany(models.Class);
  };
  return User;
};