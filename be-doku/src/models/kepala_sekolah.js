'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kepala_sekolah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.sekolah, {
        foreignKey: "sekolah_id",
        as: "sekolah"
      })
    }
  }
  kepala_sekolah.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sekolah_id: DataTypes.INTEGER,
    nomor_pengenal: DataTypes.STRING,
    no_wa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kepala_sekolah',
    tableName: 'kepala_sekolah',
  });
  return kepala_sekolah;
};