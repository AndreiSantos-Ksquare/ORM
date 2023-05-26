import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class Post extends Model<
  InferAttributes<Post>,
  InferCreationAttributes<Post, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare text: string;
  declare userId: number;
}

export const setupPost = (sequelize: Sequelize) => {
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
};

export default Post;
