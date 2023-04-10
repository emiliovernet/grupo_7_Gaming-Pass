module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: dataTypes.TEXT
          }
    };
    let config = {
        timestamps: false,
    }
    const Product_Category = sequelize.define(alias, cols, config);

    Product_Category.associate = (models) => {
      Product_Category.hasMany(models.Product, {
          as: "categories",
          foreignKey: "product_categories_id"
      })
  }

    return Product_Category
};