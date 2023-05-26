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
exports.UserRouter = void 0;
const express_1 = require("express");
const User_repo_1 = require("../repositories/User.repo");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, username } = req.body;
        const newUser = yield (0, User_repo_1.createUser)({
            name,
            username,
        });
        return res.send(newUser);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(501);
    }
}));
exports.UserRouter.get("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.params;
        const foundUser = yield (0, User_repo_1.getSingleUser)(Number(params.userId));
        if (!foundUser) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundUser.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(501);
    }
}));
exports.UserRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllUser = yield (0, User_repo_1.getUsers)();
        if (!getAllUser) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(getAllUser);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(501);
    }
}));
