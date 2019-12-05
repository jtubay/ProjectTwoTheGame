'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("classes", [
      {
        name: "Mage",
        health: 50,
        minDamage: 10,
        maxDamage: 25,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name: "Fighter",
        health: 75,
        minDamage: 5,
        maxDamage: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("classes", null, {});
  }
};
