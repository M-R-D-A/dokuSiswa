'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dokumentasi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sub_topic_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'sub_topic',
          key:'id'
        }
      },
      nama: {
        type: Sequelize.INTEGER
      },
      dokumentasi: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      tag_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tag',
          key:'id'
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
    await queryInterface.dropTable('dokumentasi');
  }
};