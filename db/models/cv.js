"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { through: "user" });
      // this.hasOne(models.template);
    }
  }
  Cv.init(
    {
      summary: DataTypes.STRING,
      template_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cv",
      underscored: true,
    }
  );
  return Cv;
};
