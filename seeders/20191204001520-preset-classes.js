'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Classes", [
      {
        name: "Wizard",
        health: 75,
        minDamage: 10,
        maxDamage: 25,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name: "Brawler",
        health: 100,
        minDamage: 5,
        maxDamage: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}
  );
},

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("Classes", null, {});
  }
};
