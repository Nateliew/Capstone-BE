"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Template extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cv, { through: "cv" });
    }
  }
  Template.init(
    {
      CSS: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "template",
      underscored: true,
    }
  );
  return Template;
};
