'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tugas_pilihan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.siswa, {
        foreignKey: "siswa_id",
        as: "siswa"
      })
    }
  }
  tugas_pilihan.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kelas_id: DataTypes.INTEGER,
    aktif: DataTypes.BOOLEAN,
    deadline: DataTypes.DATE,
    kelas: DataTypes.STRING,
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tugas',
    tableName: 'tugas',
  });
  return tugas_pilihan;
};