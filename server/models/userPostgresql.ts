import { DataTypes, Model, Sequelize } from "sequelize";
import { POSTGRESQL_DB_URI } from "../helper";
import * as pg from "pg";

export const sequelize = new Sequelize(POSTGRESQL_DB_URI, {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  dialectModule: pg.Client,
});

export class TabelaVoturi extends Model {
  id!: string;
  name!: string;
  gender!: string;
  count!: bigint;
}

TabelaVoturi.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    gender: {
      type: DataTypes.STRING,
    },
    count: {
      type: DataTypes.BIGINT,
    },
  },
  {
    sequelize,
    modelName: "Concurenti",
    tableName: "concurenti",
  }
);

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
  voteBaiat!: boolean;
  voteFata!: boolean;
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
    voteFata: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    voteBaiat: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    verified: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
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
  }
);
