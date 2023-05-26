"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupComment = void 0;
const sequelize_1 = require("sequelize");
class Comment extends sequelize_1.Model {
}
const setupComment = (sequelize) => {
    Comment.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: sequelize_1.DataTypes.STRING,
        userId: sequelize_1.DataTypes.INTEGER,
        postId: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "Comment",
        sequelize,
        paranoid: true,
    });
};
exports.setupComment = setupComment;
exports.default = Comment;
