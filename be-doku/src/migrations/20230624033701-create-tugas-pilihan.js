'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tugas_pilihan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guru_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'guru',
          key:'id'
        }
      },
      sekolah_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'sekolah',
          key:'id'
        }
      },
      deadline: {
        type: Sequelize.DATE
      },
      kelas: {
        type: Sequelize.STRING
      },
      nama: {
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
    await queryInterface.dropTable('tugas_pilihan');
  }
};