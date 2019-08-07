module.exports = function (sequelize, Sequelize) {
    const Preferences = sequelize.define(
        "Preferences", {
            food: {
                type: Sequelize.STRING,
                allowNull: false
            },
            genre: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });

    User_info.associate = function (models) {
        User_info.belongsTo(models.User);
    };

    return Preferences
}