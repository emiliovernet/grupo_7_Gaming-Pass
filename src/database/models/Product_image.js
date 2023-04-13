module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_image';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: dataTypes.TEXT
          },
          products_id: {
            type: dataTypes.INTEGER,
          }
    };
    let config = {
        timestamps: false,
    }
    const Product_image = sequelize.define(alias, cols, config);

    Product_image.associate = (models) => {
      Product_image.belongsTo(models.Product_Category, {
            as: "product_image",
            foreignKey: "products_id"
        })
    }

    return Product_image
};