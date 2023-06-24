'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tugas_pilihan_siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tugas_pilihan, {
        foreignKey: "tugas_pilihan_id",
        as: "tugas"
      })
      this.belongsTo(models.siswa, {
        foreignKey: "siswa_id",
        as: "siswa"
      })
    }
  }
  tugas_pilihan_siswa.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tugas_id: DataTypes.INTEGER,
    siswa_id: DataTypes.INTEGER,
    telat: DataTypes.BOOLEAN,
    nilai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tugas_pilihan_siswa',
    tableName: 'tugas_pilihan_siswa',
  });
  return tugas_pilihan_siswa;
};