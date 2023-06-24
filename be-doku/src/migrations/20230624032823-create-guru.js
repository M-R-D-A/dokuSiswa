'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('guru', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sekolah_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'sekolah',
          key:'id'
        }
      },
      nama: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      nomor_pengenal: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      no_wa: {
        type: Sequelize.STRING
      },
      mapel: {
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
    await queryInterface.dropTable('guru');
  }
};