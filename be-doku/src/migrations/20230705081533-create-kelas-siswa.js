'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kelas_siswa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kelas_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'kelas',
          key: 'id'
        }
      },
      siswa_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'siswa',
          key: 'id'
        }
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
    await queryInterface.dropTable('kelas_siswa');
  }
};