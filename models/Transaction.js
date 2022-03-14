module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        users_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        shipping_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
        }
    }, {
        tableName: 'transactions',
        // timestamps: true,
        // paranoid : true
    })

    Transaction.associate = models => {
        Transaction.hasMany(models.TransactionItem, {
            foreignKey: "transactions_id",
            as: "transcation_item_product_id"
        })
        Transaction.belongsTo(models.User, {
            foreignKey: "id"
        })
    }
    return Transaction;
}