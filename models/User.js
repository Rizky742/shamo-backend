module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roles: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "USER",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailVerifiedAt: {
      field: 'email_verified_at',
      type: DataTypes.DATE,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    twoFactorSecret: {
      field: 'two_factor_secret',
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twoFactorRecoveryCodes: {
      field: 'two_factor_recovery_codes',
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rememberToken: {
      field: 'remember_token',
      type: DataTypes.STRING,
      allowNull: true,
    },
    currentTeamId: {
      field: 'current_team_id',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    profilePhotoPath: {
      field: 'profile_photo_path',
      type: DataTypes.TEXT,
      allowNull: true,
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
    tableName: 'users',
  });
  // User.associate = models => {
  //     User.hasMany(models.Transaction, {
  //         foreignKey: "users_id",
  //         as: "user_id",
  //     });

  //     User.hasMany(models.TransactionItem, {
  //       foreignKey: "products_id",
  //       as: "user_product_id"
  //     })
  // }

  return User;
}