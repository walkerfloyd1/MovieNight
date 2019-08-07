// const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define(
        'Users',
        {
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }
        // {
        //     timestamps: false,
        //     instanceMethods: {
        //         comparePassword: function(plaintextPassword) {
        //           return bcrypt.compareSync(plaintextPassword, this.password);
        //         }
        //     }
        );

    User.associate = function (models) {
        User.hasOne(models.User_info, {
            onDelete: "cascade"
        });
        // User.belongsTo(this, {foreignKey: 'countryCode', sourceKey: 'isoCode'}) through 
        // User.hasMany(this, {foreignKey: 'id', sourceKey: 'buddies'});
    }

    // User.beforeCreate((user, options) => {
    //     return bcrypt.hash(user.password, 10).then(hash => {
    //         return user.password = hash;
    //     }).catch(err => {
    //         if (err) throw err;
    //     })
    //   });

    return User;
}