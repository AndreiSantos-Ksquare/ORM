import { Router, Request, Response } from "express";
import { IComment } from "../interfaces";
import { createComment, getComments } from "../repositories/Comment.repo";

export const CommentRouter = Router();

CommentRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { text, userId, postId } = req.body as IComment;

    const newComment = await createComment({
      text,
      userId,
      postId,
    });

    return res.send(newComment);
  } catch (error) {
    console.error(error);
    return res.sendStatus(501);
  }
});

CommentRouter.get("/", async (req: Request, res: Response) => {
  try {
    const getAllComments = await getComments();

    if (!getAllComments) {
      return res.sendStatus(404);
    }

    res.status(200);
    return res.send(getAllComments);
  } catch (error) {
    console.error(error);
    return res.sendStatus(501);
  }
});
