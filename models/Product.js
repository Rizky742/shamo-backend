module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNullL: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        categories_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
        }
    }, {
        tableName: 'products',
        // timestamps: true,
        // paranoid : true
    })

    Product.associate = models => {
        Product.hasMany(models.ProductGallery, {
            foreignKey: "products_id",
            as: "product_gallery_id"
        });

        Product.belongsTo(models.ProductCategory, {
            foreignKey: "id"
        });
    }

    return Product;
}