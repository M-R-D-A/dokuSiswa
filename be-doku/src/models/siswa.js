'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pilihan, {
        foreignKey: "id",
        as: "pilihan"
      })
      this.hasMany(models.tag, {
        foreignKey: "id",
        as: "tag"
      })
      this.hasMany(models.topic, {
        foreignKey: "id",
        as: "topic"
      })
      this.hasMany(models.tugas_siswa, {
        foreignKey: "id",
        as: "tugas_siswa"
      })
    }
  }
  siswa.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING
    },
    nomor_pengenal: DataTypes.STRING,
    no_wa: DataTypes.STRING,
    foto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: 'siswa',
  });
  return siswa;
};