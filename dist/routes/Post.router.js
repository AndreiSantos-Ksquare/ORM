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
exports.PostRouter = void 0;
const express_1 = require("express");
const Post_repo_1 = require("../repositories/Post.repo");
exports.PostRouter = (0, express_1.Router)();
exports.PostRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, userId } = req.body;
        const newPost = yield (0, Post_repo_1.createPost)({
            text,
            userId,
        });
        return res.send(newPost);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(501);
    }
}));
exports.PostRouter.get("/:postId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.params;
        const foundPost = yield (0, Post_repo_1.getSinglePost)(Number(params.postId));
        if (!foundPost) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundPost.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(501);
    }
}));
exports.PostRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllPosts = yield (0, Post_repo_1.getPosts)();
        if (!getAllPosts) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(getAllPosts);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(501);
    }
}));
