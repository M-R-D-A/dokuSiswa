'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.tugas_pilihan, {
        foreignKey: "id",
        as: "tugas_pilihan"
      })
      this.belongsTo(models.sekolah, {
        foreignKey: "sekolah_id",
        as: "sekolah"
      })
    }
  }
  guru.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING,
    nomor_pengenal: DataTypes.STRING,
    no_wa: DataTypes.STRING,
    sekolah_id: DataTypes.INTEGER,
    mapel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'guru',
    tableName: 'guru',
  });
  return guru;
};