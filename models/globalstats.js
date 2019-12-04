'use strict';
module.exports = (sequelize, DataTypes) => {
  const GlobalStats = sequelize.define('GlobalStats', {
    totalTurns: DataTypes.INTEGER,
    totalWins: DataTypes.INTEGER,
    totalLoses: DataTypes.INTEGER
  }, {});
  GlobalStats.associate = function(models) {
    // associations can be defined here
  };
  return GlobalStats;
};