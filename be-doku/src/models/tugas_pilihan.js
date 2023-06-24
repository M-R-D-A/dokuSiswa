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
      this.belongsTo(models.guru, {
        foreignKey: "guru_id",
        as: "guru"
      })
      this.belongsTo(models.sekolah, {
        foreignKey: "sekolah_id",
        as: "sekolah"
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
    guru_id: DataTypes.INTEGER,
    sekolah_id: DataTypes.INTEGER,
    deadline: DataTypes.DATE,
    kelas: DataTypes.STRING,
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tugas_pilihan',
    tableName: 'tugas_pilihan',
  });
  return tugas_pilihan;
};