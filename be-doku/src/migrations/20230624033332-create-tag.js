'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tag', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siswa_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'siswa',
          key:'id'
        }
      },
      sub_topic_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'sub_topic',
          key:'id'
        }
      },
      background: {
        type: Sequelize.STRING
      },
      text: {
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
    await queryInterface.dropTable('tag');
  }
};