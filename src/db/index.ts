import { Sequelize } from "sequelize";
import { setupPost } from "../models/Post";
import { setupUser } from "../models/User";
import { setupComment } from "../models/Comment";

export let sequelize: Sequelize;

export const startDB = async (url: string): Promise<Sequelize> => {
  sequelize = new Sequelize(url);
  setupUser(sequelize);
  setupPost(sequelize);
  setupComment(sequelize);
  return sequelize;
};
