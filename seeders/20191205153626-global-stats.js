'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("GlobalStats", [{
      totalTurns: 0,
      totalWins: 0,
      totalLoses: 0,
      createdAt: new Date (),
      updatedAt: new Date ()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("GlobalStats", null, {});
  }
};
