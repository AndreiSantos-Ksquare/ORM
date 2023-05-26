"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupUser = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
const setupUser = (sequelize) => {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: sequelize_1.DataTypes.STRING,
        username: sequelize_1.DataTypes.STRING,
    }, {
        modelName: "User",
        sequelize,
        paranoid: true,
    });
};
exports.setupUser = setupUser;
exports.default = User;
