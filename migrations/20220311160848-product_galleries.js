'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('product_galleries', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        products_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: true
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true
        },
        deleted_at: {
          type: Sequelize.DATE,
          allowNull: true
        }
       });
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.dropTable('product_galleries');
  }
};
