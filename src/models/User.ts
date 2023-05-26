import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare username: string;
}

export const setupUser = (sequelize: Sequelize) => {
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
};

export default User;
