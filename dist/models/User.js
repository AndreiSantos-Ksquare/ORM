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
exports.setupUser = void 0;
const sequelize_1 = require("sequelize");
const Post_1 = __importDefault(require("./Post"));
const Comment_1 = __importDefault(require("./Comment"));
class User extends sequelize_1.Model {
}
const setupUser = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield User.sync();
    yield User.hasMany(Post_1.default, {
        foreignKey: "userId",
    });
    yield User.hasMany(Comment_1.default, {
        foreignKey: "userId",
    });
});
exports.setupUser = setupUser;
exports.default = User;
