import { Router, Request, Response } from "express";
import { IPost } from "../interfaces";
import { createPost, getSinglePost, getPosts } from "../repositories/Post.repo";

export const PostRouter = Router();

PostRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { text, userId } = req.body as IPost;

    const newPost = await createPost({
      text,
      userId,
    });

    return res.send(newPost);
  } catch (error) {
    console.error(error);
    return res.sendStatus(501);
  }
});

PostRouter.get("/:postId", async (req: Request, res: Response) => {
  try {
    const params = req.params;

    const foundPost = await getSinglePost(Number(params.postId));

    if (!foundPost) {
      return res.sendStatus(404);
    }

    res.status(200);
    return res.send(foundPost.toJSON());
  } catch (error) {
    console.error(error);
    return res.sendStatus(501);
  }
});

PostRouter.get("/", async (req: Request, res: Response) => {
  try {
    const getAllPosts = await getPosts();

    if (!getAllPosts) {
      return res.sendStatus(404);
    }

    res.status(200);
    return res.send(getAllPosts);
  } catch (error) {
    console.error(error);
    return res.sendStatus(501);
  }
});
