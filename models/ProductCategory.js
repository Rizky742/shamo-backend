module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        tableName: 'product_categories',
        // timestamps: true,
        // paranoid : true
    })

    ProductCategory.associate = models => {
        ProductCategory.hasMany(models.Product, {
            foreignKey: "categories_id",
            as: 'category_id'
        })
    }

    return ProductCategory;
}