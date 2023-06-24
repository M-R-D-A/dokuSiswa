'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.siswa, {
        foreignKey: "siswa_id",
        as: "siswa"
      })
      this.belongsTo(models.sub_topic, {
        foreignKey: "sub_topic_id",
        as: "sub_topic"
      })
    }
  }
  tag.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    siswa_id: DataTypes.INTEGER,
    sub_topic_id: DataTypes.INTEGER,
    background: DataTypes.STRING,
    text: DataTypes.STRING,
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tag',
    tableName: 'tag',
  });
  return tag;
};