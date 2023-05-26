"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPost = void 0;
const sequelize_1 = require("sequelize");
const Comment_1 = __importDefault(require("./Comment"));
class Post extends sequelize_1.Model {
}
const setupPost = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    Post.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: sequelize_1.DataTypes.STRING,
        userId: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "Post",
        sequelize,
        paranoid: true,
    });
    yield Post.sync();
    yield Post.hasMany(Comment_1.default);
});
exports.setupPost = setupPost;
exports.default = Post;
