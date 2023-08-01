'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.kelas, {
        foreignKey: "kelas_id",
        as: "kelas"
      })
      this.belongsTo(models.siswa, {
        foreignKey: "siswa_id",
        as: "siswa"
      })
    }
  }
  kelas_siswa.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kelas_id: DataTypes.INTEGER,
    siswa_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas_siswa',
    tableName: 'kelas_siswa',
  });
  return kelas_siswa;
};