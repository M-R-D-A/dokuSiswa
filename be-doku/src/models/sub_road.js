'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_road extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sub_road.init({
    nama: DataTypes.STRING,
    link: DataTypes.STRING,
    menit: DataTypes.INTEGER,
    roadmap_id: DataTypes.INTEGER,
    done: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'sub_road',
  });
  return sub_road;
};