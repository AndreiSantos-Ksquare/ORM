import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";
import Post from "./Post";
import Comment from "./Comment";

class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare username: string;
}

export const setupUser = async (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      username: DataTypes.STRING,
    },
    {
      modelName: "User",
      sequelize,
      paranoid: true,
    }
  );

  await User.sync();

  await User.hasMany(Post, {
    foreignKey: "userId",
  });

  await User.hasMany(Comment, {
    foreignKey: "userId",
  });
};

export default User;
