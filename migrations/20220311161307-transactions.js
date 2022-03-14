'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      users_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        // references: {
        //   model: "users",
        //   key: "id"
        // }
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      total_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      shipping_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment: {
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

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('transactions');
  }
};
