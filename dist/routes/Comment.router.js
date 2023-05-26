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
exports.CommentRouter = void 0;
const express_1 = require("express");
const Comment_repo_1 = require("../repositories/Comment.repo");
exports.CommentRouter = (0, express_1.Router)();
exports.CommentRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, userId, postId } = req.body;
        const newComment = yield (0, Comment_repo_1.createComment)({
            text,
            userId,
            postId,
        });
        return res.send(newComment);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(501);
    }
}));
exports.CommentRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllComments = yield (0, Comment_repo_1.getComments)();
        if (!getAllComments) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(getAllComments);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(501);
    }
}));
