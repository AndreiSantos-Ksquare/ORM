"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPost = void 0;
const sequelize_1 = require("sequelize");
class Post extends sequelize_1.Model {
}
const setupPost = (sequelize) => {
    Post.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        author: sequelize_1.DataTypes.STRING,
        text: sequelize_1.DataTypes.STRING,
    }, {
        modelName: "Post",
        sequelize,
    });
};
exports.setupPost = setupPost;
exports.default = Post;
