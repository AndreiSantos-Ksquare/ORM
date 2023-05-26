import Comment from "../models/Comment";
import { IComment } from "../interfaces";

export const createComment = async ({
  text,
  userId,
  postId,
}: IComment): Promise<Comment | null> => {
  try {
    const response = await Comment.create({
      text,
      userId,
      postId,
    });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getComments = async (): Promise<Comment[] | null> => {
  try {
    const response = await Comment.findAll();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
