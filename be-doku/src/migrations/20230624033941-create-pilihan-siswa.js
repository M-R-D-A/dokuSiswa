'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pilihan_siswa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pilihan_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'pilihan',
          key:'id'
        }
      },
      siswa_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'siswa',
          key:'id'
        }
      },
      opsi: {
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
    await queryInterface.dropTable('pilihan_siswa');
  }
};