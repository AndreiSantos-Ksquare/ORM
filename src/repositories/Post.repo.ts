import Post from "../models/Post";
import { IPost } from "../interfaces";

export const createPost = async ({
  text,
  userId,
}: IPost): Promise<Post | null> => {
  try {
    const response = await Post.create({
      text,
      userId,
    });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSinglePost = async (id: number): Promise<Post | null> => {
  try {
    const response = await Post.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPosts = async (): Promise<Post[] | null> => {
  try {
    const response = await Post.findAll();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
