import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";
import Comment from "./Comment";

class Post extends Model<
  InferAttributes<Post>,
  InferCreationAttributes<Post, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare text: string;
  declare userId: number;
}

export const setupPost = async (sequelize: Sequelize) => {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      modelName: "Post",
      sequelize,
      paranoid: true,
    }
  );

  await Post.sync();

  await Post.hasMany(Comment);
};

export default Post;
