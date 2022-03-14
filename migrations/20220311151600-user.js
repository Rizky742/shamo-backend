'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      roles: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_verified_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      two_factor_secret: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      two_factor_recovery_codes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      remember_token: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      current_team_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      profile_photo_path: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
    
    await queryInterface.addConstraint('users', {
      type: 'unique',
      fields: ['email'],
      name: 'UNIQUE_USERS_EMAIL'
    })
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('users');
  }
};
