'use strict';

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
    await queryInterface.bulkInsert('product_images', [
       {
         name: "IMG-NOTEBOOK1.JPG",
         products_id: "1"
       },
       {
        name: "IMG-NOTEBOOK2.JPG",
        products_id: "2"
       },
       {
        name: "IMG-NOTEBOOK3.JPG",
        products_id: "3"
       },
       {
        name: "IMG-MONITOR1.JPG",
        products_id: "4"
       },
       {
        name: "IMG-MONITOR2.JPG",
        products_id: "5"
       },
       {
        name: "IMG-MONITOR3.JPG",
        products_id: "6"
       },
       {
        name: "IMG-MEMORIA1.JPG",
        products_id: "7"
       },
       {
        name: "IMG-MEMORIA2.JPG",
        products_id: "8"
       },
       {
        name: "IMG-MEMORIA3.JPG",
        products_id: "9"
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
    await queryInterface.bulkDelete('product_images', null, {});
  }
};
