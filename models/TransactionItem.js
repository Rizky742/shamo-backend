module.exports = (sequelize, DataTypes) => {
    const TransactionItem = sequelize.define('TransactionItem', {
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
        products_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        transactions_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        quantity: {
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
        }
    }, {
        tableName: 'transaction_items',
        // timestamps: true
    })

    TransactionItem.associate = models => {

        TransactionItem.hasOne(models.Product, {
            foreignKey: "id",
            as: "transactionitem_product_id"
        })

        TransactionItem.belongsTo(models.User, {
            foreignKey: "id",
            as: "transaction_item_user_id"
        })

        TransactionItem.belongsTo(models.Transaction, {
            foreignKey: "id",
            as: "id_transaksi"
        })
    }

    return TransactionItem;

}