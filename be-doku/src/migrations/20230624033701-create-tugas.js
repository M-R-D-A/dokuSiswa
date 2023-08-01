'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tugas', {
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
          key:'id'
        }
      },
      aktif: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('tugas');
  }
};