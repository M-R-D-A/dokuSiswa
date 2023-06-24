'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pilihan_siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.pilihan, {
        foreignKey: "pilihan_id",
        as: "pilihan"
      })
      this.belongsTo(models.siswa, {
        foreignKey: "siswa_id",
        as: "siswa"
      })
    }
  }
  pilihan_siswa.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pilihan_id: DataTypes.INTEGER,
    siswa_id: DataTypes.INTEGER,
    opsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pilihan_siswa',
    tableName: 'pilihan_siswa',
  });
  return pilihan_siswa;
};