'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Products', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        name: "Notebook ASUS Studiobook Pro",
        price: "350000",
        discount: "30",
        description: "Notebook Asus Studiobook Pro Rtx 2060 I7 1tb Raid Ssd 32gb Ddr4 Wuxga",
        product_categories_id: "1"
      },
      {
        name: "Notebook XPG Xenia",
        price: "30000",
        discount: "20",
        description: "Notebook XPG Xenia 15.6 Core I7 1165G7 16GB (2x8GB) 4266Mhz 1TB SSD NVMe W10H Silver",
        product_categories_id: "1"
      },
      {
        name: "Notebook Asus Vivobook M3500",
        price: "260000",
        discount: "10",
        description: "Notebook Asus Vivobook M3500 15.6 Ryzen 5 5600H 8GB 512GB SSD NVMe W11 Home",
        product_categories_id: "1"
      },
      {
        name: "Monitor Samsung 22 T350H",
        price: "50000",
        discount: "15",
        description: "Monitor Samsung 22 T350H FHD IPS 75Hz",
        product_categories_id: "2"
      },
      {
        name: "Monitor Gamer Samsung Odyssey",
        price: "65000",
        discount: "17",
        description: "Monitor Gamer Samsung 32 G3 Odyssey Full HD 165Hz",
        product_categories_id: "2"
      },
      {
        name: "Monitor ViewSonic",
        price: "63000",
        discount: "12",
        description: "Monitor ViewSonic 24.5 XG251G 360Hz IPS",
        product_categories_id: "2"
      },
      {
        name: "Memoria GeiL",
        price: "16000",
        discount: "10",
        description: "Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black",
        product_categories_id: "3"
      },
      {
        name: "Memoria Patriot 8GB",
        price: "8500",
        discount: "8",
        description: "Memoria Patriot Viper DDR4 8GB",
        product_categories_id: "3"
      },
      {
        name: "Memoria Patriot 16GB",
        price: "15300",
        discount: "13",
        description: "Memoria Patriot Viper DDR4 16GB",
        product_categories_id: "3"
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
    await queryInterface.bulkDelete('products', null, {});
  }
};
