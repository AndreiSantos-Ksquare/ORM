import { Router } from "express";
import { PostRouter } from "./Post.router";
import { UserRouter } from "./User.router";
import { CommentRouter } from "./Comment.router";

const APIRouter = Router();

APIRouter.use("/user", UserRouter);
APIRouter.use("/post", PostRouter);
APIRouter.use("/comment", CommentRouter);

export default APIRouter;
