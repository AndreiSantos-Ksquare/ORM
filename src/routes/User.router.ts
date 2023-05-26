import { Router, Request, Response } from "express";
import { IUser } from "../interfaces";
import { createUser, getSingleUser, getUsers } from "../repositories/User.repo";

export const UserRouter = Router();

UserRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name, username } = req.body as IUser;

    const newUser = await createUser({
      name,
      username,
    });

    return res.send(newUser);
  } catch (error) {
    console.error(error);
    return res.sendStatus(501);
  }
});

UserRouter.get("/:userId", async (req: Request, res: Response) => {
  try {
    const params = req.params;

    const foundUser = await getSingleUser(Number(params.userId));

    if (!foundUser) {
      return res.sendStatus(404);
    }

    res.status(200);
    return res.send(foundUser.toJSON());
  } catch (error) {
    console.error(error);
    return res.sendStatus(501);
  }
});

UserRouter.get("/", async (req: Request, res: Response) => {
  try {
    const getAllUser = await getUsers();

    if (!getAllUser) {
      return res.sendStatus(404);
    }

    res.status(200);
    return res.send(getAllUser);
  } catch (error) {
    console.error(error);
    return res.sendStatus(501);
  }
});
