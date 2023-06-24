'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pilihan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tugas_pilihan_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tugas_pilihan',
          key:'id'
        }
      },
      opsi1: {
        type: Sequelize.STRING
      },
      opsi2: {
        type: Sequelize.STRING
      },
      opsi3: {
        type: Sequelize.STRING
      },
      opsi4: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pilihan');
  }
};