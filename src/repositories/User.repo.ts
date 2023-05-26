import User from "../models/User";
import { IUser } from "../interfaces";

export const createUser = async ({
  name,
  username,
}: IUser): Promise<User | null> => {
  try {
    const response = await User.create({
      name,
      username,
    });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSingleUser = async (id: number): Promise<User | null> => {
  try {
    const response = await User.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUsers = async (): Promise<User[] | null> => {
  try {
    const response = await User.findAll();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
