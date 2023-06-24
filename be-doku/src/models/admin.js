'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admin.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role: DataTypes.STRING,
    nama: DataTypes.STRING,
    password: {
      type: DataTypes.STRING
    },
    nomor_pengenal: DataTypes.STRING,
    foto: DataTypes.STRING,
    no_wa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin',
    tableName: 'admin',
  });
  return admin;
};