// Import Sequelize
import { DataTypes, Model, Sequelize } from "sequelize";

// Define model UserTable
class UserTable extends Model {
  public id!: number;
  public email!: string;
  public name!: string;
  public password!: string;
  public code!: string;
  public status!: string;
}

// Define model Session
class Session extends Model {
  public id!: number;
  public email!: string;
  public token!: string;
}

// Initialize the Sequelize instance with your database configuration
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "postgres",
});

// Define and synchronize the models with the database
UserTable.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    code: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "UserTable",
  }
);

Session.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    token: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Session",
  }
);

export { sequelize, UserTable, Session };
