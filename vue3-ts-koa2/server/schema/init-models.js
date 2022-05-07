var DataTypes = require("sequelize").DataTypes;
var _management = require("./management");
var _user = require("./user");

function initModels(sequelize) {
  var management = _management(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    management,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
