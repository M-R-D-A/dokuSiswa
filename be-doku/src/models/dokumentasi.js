'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dokumentasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.sub_topic, {
        foreignKey: "sub_topic_id",
        as: "sub_topic"
      })
      this.belongsTo(models.tag, {
        foreignKey: "tag_id",
        as: "tag"
      })
    }
  }
  dokumentasi.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sub_topic_id: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    dokumentasi: DataTypes.TEXT,
    foto: DataTypes.STRING,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dokumentasi',
    tableName: 'dokumentasi',
  });
  return dokumentasi;
};