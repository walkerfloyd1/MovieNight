module.exports = function (sequelize, DataTypes) {
    const User_info = sequelize.define(
        "User_info", {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            food: {
                type: DataTypes.STRING,
                allowNull: false
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });

    User_info.associate = function (models) {
        User_info.belongsTo(models.User);
    };

    return User_info
}