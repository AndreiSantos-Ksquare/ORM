import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class Comment extends Model<
  InferAttributes<Comment>,
  InferCreationAttributes<Comment, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare text: string;
  declare userId: number;
  declare postId: number;
}

export const setupComment = (sequelize: Sequelize) => {
  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      modelName: "Comment",
      sequelize,
      paranoid: true,
    }
  );
};

export default Comment;
