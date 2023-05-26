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
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const Post_1 = require("../models/Post");
const User_1 = require("../models/User");
const Comment_1 = require("../models/Comment");
const startDB = (url) => __awaiter(void 0, void 0, void 0, function* () {
    exports.sequelize = new sequelize_1.Sequelize(url);
    (0, User_1.setupUser)(exports.sequelize);
    (0, Post_1.setupPost)(exports.sequelize);
    (0, Comment_1.setupComment)(exports.sequelize);
    return exports.sequelize;
});
exports.startDB = startDB;
