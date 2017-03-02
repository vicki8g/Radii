module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    user_pic: DataTypes.STRING
  });
  //   // Here we'll pass a second "classMethods" object into the define method
  //   // This is for any additional configuration we want to give our models
  //   {
  //     // We're saying that we want our Author to have Posts
  //     classMethods: {
  //       associate: function(models) {
  //         // Associating Author with Posts
  //         // When an Author is deleted, also delete any associated Posts
  //         Author.hasMany(models.Post, {
  //           onDelete: "cascade"
  //         });
  //       }
  //     }
  //   }
  // );
  return User;
};