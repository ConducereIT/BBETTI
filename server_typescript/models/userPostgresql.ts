import { DataTypes, Model, Sequelize } from "sequelize";
import { POSTGRESQL_DB_URI } from "../helper";

export const sequelize = new Sequelize(POSTGRESQL_DB_URI, {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

export class UserModel extends Model {
  email!: string;
  userId!: string;
  authProvider!: string;
  hashedPassword!: string | undefined;
  createdAt!: Date;
  verified!: boolean;
  lastSignedIn!: Date | null;
  tokenConfirmEmail!: string;
  tokenReset!: string;
}

UserModel.init(
  {
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    hashedPassword: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    lastSignedIn: {
      type: DataTypes.DATE,
      defaultValue: undefined,
    },
    authProvider: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["Email", "Google", "Github", "Facebook"]],
      },
    },
    tokenReset: {
      type: DataTypes.STRING,
      defaultValue: "token",
    },
    tokenConfirmEmail: {
      type: DataTypes.STRING,
      defaultValue: "token",
    },
    verified: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  },
);

export class ActiveSession extends Model {
  token!: string;
  userId!: string;
}

ActiveSession.init(
  {
    token: DataTypes.STRING(9999),
    userId: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "ActiveSession",
    tableName: "active_sessions",
  },
);