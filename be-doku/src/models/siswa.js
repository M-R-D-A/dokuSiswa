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
      this.hasMany(models.pilihan_siswa, {
        foreignKey: "id",
        as: "pilihan_siswa"
      })
      this.hasMany(models.tag, {
        foreignKey: "id",
        as: "tag"
      })
      this.hasMany(models.topic, {
        foreignKey: "id",
        as: "topic"
      })
      this.hasMany(models.tugas_pilihan_siswa, {
        foreignKey: "id",
        as: "tugas_pilihan_siswa"
      })
      this.belongsTo(models.sekolah, {
        foreignKey: "sekolah_id",
        as: "sekolah"
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
    nama: DataTypes.STRING,
    nomor_pengenal: DataTypes.STRING,
    no_wa: DataTypes.STRING,
    sekolah_id: DataTypes.INTEGER,
    kelas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: 'siswa',
  });
  return siswa;
};