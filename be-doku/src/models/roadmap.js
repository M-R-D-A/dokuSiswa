'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roadmap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roadmap.init({
    nama: DataTypes.STRING,
    jam: DataTypes.INTEGER,
    siswa_id: DataTypes.INTEGER,
    finish: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'roadmap',
  });
  return roadmap;
};