module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: dataTypes.TEXT,
            allowNull: false,
          },
          price: {
            type: dataTypes.DECIMAL(11,2),
            allowNull: false,
          },
          discount: {
            type: dataTypes.TEXT,
          },
          description: {
            type: dataTypes.TEXT,
          },
          product_categories_id: {
            type: dataTypes.INTEGER
          }
      }
    let config = {
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
      Product.belongsTo(models.Product_Category, {
            as: "product_category",
            foreignKey: "product_categories_id"
        }),
        Product.hasMany(models.Product_image, {
          as: "images",
          foreignKey: "products_id",
          onDelete: "CASCADE",
      })
    }

    return Product
};