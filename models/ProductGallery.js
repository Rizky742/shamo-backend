module.exports = (sequelize, DataTypes) => {
    const ProductGallery = sequelize.define('ProductGallery', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        products_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
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
        tableName: 'product_galleries',
        // timestamps: true,
        // paranoid : true
    })

    ProductGallery.associate = models => {
        ProductGallery.belongsTo(models.Product, {
            foreignKey: 'id',
            as: "galery_product_id"
        })
    }

    return ProductGallery;
}