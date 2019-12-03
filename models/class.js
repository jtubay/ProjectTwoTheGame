'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    health: DataTypes.INTEGER,
    minDamage: DataTypes.INTEGER,
    maxDamage: DataTypes.INTEGER
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};