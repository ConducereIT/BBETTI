import { sequelize, UserTable } from "./db";
import { Sequelize } from "sequelize";
import bcryptjs from "bcryptjs";

export type CreateUserResponse = {
  status: boolean;
  message: string;
};

export class User {
  private sequelize: Sequelize;

  constructor() {
    this.sequelize = sequelize;
  }

  async createUser(
    username: string,
    email: string,
    password: string,
    confirmedPassword: string
  ): Promise<CreateUserResponse> {
    try {
      if (password !== confirmedPassword) {
        return { status: false, message: "Parola nu corespunde" };
      }

      const existingUser = await UserTable.findOne({
        where: { email: email },
      });

      if (existingUser) {
        return { status: false, message: "Emailul deja exista." };
      }

      const hashedPassword = await bcryptjs.hash(password, 10);

      const code: string = Math.floor(
        Math.random() * (999999 - 111111) + 111111
      ).toString();

      const status = "notverified";

      await UserTable.create({
        data: {
          name: username,
          email: email,
          password: hashedPassword,
          code: code,
          status: status,
        },
      });

      const subject = "Cod pentru verificare email";
      const message = `Codul de verificare este ${code}`;

      if (true) {
        return { status: true, message: "Success" };
      } else {
        return {
          status: false,
          message: "Eroare interna. Te rog reincearca mai tarziu!",
        };
      }
    } catch (error) {
      console.error(error);
      return {
        status: false,
        message: "Eroare interna. Te rog reincearca mai tarziu!",
      };
    }
  }
}
