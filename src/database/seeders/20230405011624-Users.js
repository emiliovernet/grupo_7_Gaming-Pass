'use strict';
const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: "Agustin",
        email: "agustin.granda@gmail.com",
        password: bcryptjs.hashSync("123456", 10),
        avatar: "avdefault.jpg",
        roles_id: "1"
      },
      {
        name: "Virginia",
        email: "virginia.schmied@gmail.com",
        password: bcryptjs.hashSync("123456", 10),
        avatar: "avdefault2.jpg",
        roles_id: "2"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
