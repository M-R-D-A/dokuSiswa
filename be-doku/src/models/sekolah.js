'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sekolah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.guru, {
        foreignKey: "id",
        as: "guru"
      })
      this.hasMany(models.kepala_sekolah, {
        foreignKey: "id",
        as: "kepala_sekolah"
      })
      this.hasMany(models.siswa, {
        foreignKey: "id",
        as: "siswa"
      })
      this.hasMany(models.tugas_pilihan, {
        foreignKey: "id",
        as: "tugas_pilihan"
      })
    }
  }
  sekolah.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sekolah',
    tableName: 'sekolah',
  });
  return sekolah;
};