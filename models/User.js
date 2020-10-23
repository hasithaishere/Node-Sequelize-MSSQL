function UserSchema (sequelize, dataTypes){
    const User = sequelize.define('user', {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        firstname: {
            type: dataTypes.STRING,
            notEmpty: true
        },
        lastname: {
            type: dataTypes.STRING,
            notEmpty: true
        },
        email: {
            type: dataTypes.STRING,
            unique: true,
            notEmpty: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
    });

    return User;
}

export default UserSchema;
// module.exports = UserSchema;