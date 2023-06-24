'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tugas_pilihan_siswa', {
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
      siswa_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'siswa',
          key:'id'
        }
      },
      telat: {
        type: Sequelize.BOOLEAN
      },
      nilai: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('tugas_pilihan_siswa');
  }
};