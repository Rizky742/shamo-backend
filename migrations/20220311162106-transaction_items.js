'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('transaction_items', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      users_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      products_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      transactions_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.BIGINT,
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
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('transaction_items');

  }
};
