module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProductDetails: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Units: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    
  })

  // Product.associate = function(models) {
  //   // We're saying that a new product should belong to a brand
  //   // A Product can't be created without a brand due to the foreign key constraint
  //   Product.belongsTo(models.Brand, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Product
}
