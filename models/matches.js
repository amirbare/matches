module.exports = function(sequelize, DataTypes) {
  var Matches = sequelize.define("matches", {
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    lat: DataTypes.FLOAT,
    log: DataTypes.FLOAT

  });
  return Matches;
};



