module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
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
          email: {
            type: dataTypes.TEXT,
            allowNull: false,
          },
          password: {
            type: dataTypes.TEXT,
            allowNull: false,
          },
          avatar: {
            type: dataTypes.TEXT,
            allowNull: false,
          },
          roles_id:{
            type: dataTypes.INTEGER,
           
    },
}
    let config = {
        timestamps: false,
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.Roles, {
            as: "role",
            foreignKey: "roles_id"
        })
    }

    return User
};