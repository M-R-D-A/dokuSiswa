'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pilihan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.jawaban, {
        foreignKey: "id",
        as: "jawaban"
      })
      this.hasMany(models.pilihan_siswa, {
        foreignKey: "pilihan_siswa_id",
        as: "pilihan_siswa"
      })
      this.belongsTo(models.tugas_pilihan, {
        foreignKey: "tugas_pilihan_id",
        as: "tugas_pilihan"
      })
    }
  }
  pilihan.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tugas_pilihan_id: DataTypes.INTEGER,
    opsi1: DataTypes.STRING,
    opsi2: DataTypes.STRING,
    opsi3: DataTypes.STRING,
    opsi4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pilihan',
    tableName: 'pilihan',
  });
  return pilihan;
};