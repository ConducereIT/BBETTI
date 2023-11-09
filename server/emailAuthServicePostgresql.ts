import jwt from "jsonwebtoken";
import {
  sequelize,
  UserModel,
  ActiveSession,
  TabelaVoturi,
} from "./models/userPostgresql";
import { hashPassword, validatePassword, POSTGRESQL_DB_URI } from "./helper";
import {
  UserLoginResponse,
  CheckSessionResponse,
  ResetPasswordResponse,
  ResetPasswordConfirmResponse,
  EmailConfirmationResponse,
  ResendEmailConfirmationResponse,
  VoteResponse,
  GetToken,
  CanVote,
} from "./models/typeUser";
import { Send_mailer } from "./mailer";
import { randomUUID } from "crypto";
import { v4 as uuidv4 } from "uuid";

/**
 * The User server class that will be deployed on the genezio infrastructure.
 */
export class UserServicePostgresql {
  constructor() {
    this.#connect();
  }

  /**
   * Private method used to connect to the DB.
   */
  #connect() {
    sequelize.sync();
  }

  /**
   * Method that can be used to create a new user.
   *
   * The method will be exported via SDK using genezio.
   *
   * @param {string} email The user's email.
   * @param {string} password The user's password.
   * @returns {Promise<UserLoginResponse>} An object containing a boolean property "status" which
   * is ok if the creation was successfull, error otherwise.
   */
  async register(email: string, password: string): Promise<UserLoginResponse> {
    console.log(`Registering user with email ${email}...`);

    const regex = /.*@.*\.upb\.ro/;
    const isUpbMail = regex.test(email);

    if (!isUpbMail) {
      return {
        status: "error",
        errorMessage: "You can only register using an UPB email address.",
      };
    }
    const existingUser = await UserModel.findOne({ where: { email: email } });

    if (existingUser) {
      return {
        status: "error",
        errorMessage:
          "An account is already created using this email address. Please pick another one.",
      };
    }

    const hashedPassword = await hashPassword(password);

    const token = uuidv4();

    const newUser = await UserModel.create({
      userId: randomUUID(),
      email: email,
      hashedPassword: hashedPassword,
      createdAt: new Date(),
      lastSignedIn: null,
      authProvider: "Email",
      verified: false,
      tokenConfirmEmail: token,
      voteFata: false,
      voteBaiat: false,
    });

    const mailer = new Send_mailer();
    const mailverify = await mailer.send(
      email,
      "Confirmation mail",
      "Confirm token: " + token,
    );

    if (!mailverify)
      return {
        status: "error",
        errorMessage: "Email not send",
      };

    return {
      status: "ok",
      user: {
        email: newUser.email,
        userId: newUser.userId,
        authProvider: "Email",
        createdAt: newUser.createdAt,
        verified: newUser.verified,
        tokenConfirmEmail: newUser.tokenConfirmEmail,
        tokenReset: newUser.tokenReset,
        voteBaiat: newUser.voteBaiat,
        voteFata: newUser.voteFata,
      },
    };
  }

  /**
   * Method that can be used to obtain a login token for a giving user.
   *
   * The method will be exported via SDK using genezio.
   *
   * @param {string} email The user's email.
   * @param {string} password The user's password.
   * @returns {Promise<UserLoginResponse>} An object containing a boolean property "status" which
   * is ok if the login was successfull, error otherwise.
   */
  async login(email: string, password: string): Promise<UserLoginResponse> {
    const existingUser = await UserModel.findOne({ where: { email: email } });

    if (!existingUser) {
      return {
        status: "error",
        errorMessage: "Try again! Email or password is incorrect",
      };
    }

    const isValid = await validatePassword(
      existingUser.hashedPassword!,
      password,
    );

    if (isValid) {
      existingUser.hashedPassword = undefined;
      const token = jwt.sign(
        existingUser.toJSON(),
        process.env.JWT_TOKEN_SECRET!,
        {
          expiresIn: 86400, // 1 week
        },
      );

      await ActiveSession.create({ token: token, userId: existingUser.userId });
      return {
        status: "ok",
        user: {
          email: existingUser.email,
          userId: existingUser.userId,
          authProvider: existingUser.authProvider,
          createdAt: existingUser.createdAt,
          verified: existingUser.verified,
          tokenConfirmEmail: existingUser.tokenConfirmEmail,
          tokenReset: existingUser.tokenReset,
          voteBaiat: existingUser.voteBaiat,
          voteFata: existingUser.voteFata,
        },
        token: token,
      };
    } else {
      return {
        status: "error",
        errorMessage: "Incorrect user or password. Try again!",
      };
    }
  }

  /**
   * Methods that receives a token and confirms if it is valid or not.
   *
   * @param {string} token The user's token.
   * @returns {Promise<CheckSessionResponse>} An object containing a boolean property "status" which is ok if the token is valid, error otherwise.
   */
  async checkSession(token: string): Promise<CheckSessionResponse> {
    const session = await ActiveSession.findOne({ where: { token: token } });

    if (!session) {
      return { status: "error", errorMessage: "Invalid session token." };
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET!) as any;

    const user = await UserModel.findOne({ where: { userId: decoded.userId } });

    if (!user) {
      return { status: "error", errorMessage: "Invalid session token." };
    }

    return { status: "ok" };
  }

  /**
   * Sends a password reset token to a user's email.
   * @param {string} email - The user's email address.
   * @returns {Promise<GetToken>} Return Token for a specific email
   */

  async getToken(email: string): Promise<GetToken> {
    const existingUser = await UserModel.findOne({ where: { email: email } });

    const id = existingUser?.userId;

    const tokenUser = await ActiveSession.findOne({
      where: { userId: id },
    });

    if (!tokenUser) {
      return { status: "error", errorMessage: "ceva a mers prost" };
    }

    return { status: "ok", token: tokenUser.token };
  }

  /**
   * Sends a password reset token to a user's email.
   * @param {string} email - The user's email address.
   * @returns {Promise<ResetPasswordResponse>} An object with a boolean property "status" indicating success or failure.
   */
  async resetPassword(email: string): Promise<ResetPasswordResponse> {
    const existingUser = await UserModel.findOne({ where: { email: email } });

    if (!existingUser) {
      return {
        status: "error",
        errorMessage: "No user found with this email address.",
      };
    }

    const token = uuidv4();

    existingUser.tokenReset = token;
    await existingUser.save();

    const mailer = new Send_mailer();
    const mailverify = await mailer.send(
      email,
      "Reset password",
      "Reset token: " + token,
    );

    if (!mailverify)
      return {
        status: "error",
        errorMessage: "Email not send",
      };

    return { status: "ok" };
  }

  /**
   *  Resets the user's password.
   *  @param {string} token - The token received from the resetPassword method.
   *  @param {string} password - The new password.
   *  @returns {Promise<ResetPasswordConfirmResponse>} An object with a boolean property "status" indicating success or failure.
   */
  async resetPasswordConfirmation(
    token: string,
    password: string,
  ): Promise<ResetPasswordConfirmResponse> {
    console.log(
      `Received reset password confirmation request for token ${token}`,
    );

    try {
      const user = await UserModel.findOne({ where: { tokenReset: token } });

      if (user) {
        const hashedPassword = await hashPassword(password);
        user.tokenReset = "token";
        user.hashedPassword = hashedPassword;
        await user.save();

        return { status: "ok", user: user };
      } else {
        return { status: "error", errorMessage: "User not found" };
      }
    } catch (error) {
      console.error(error);
      return { status: "error", errorMessage: "Token invalid" };
    }
  }

  /**
   *  Confirms the user's email address.
   *  @param {string} token - The token received from the register method.
   *  @returns {Promise<EmailConfirmationResponse>} An object with a boolean property "status" indicating success or failure.
   */
  async emailConfirmation(token: string): Promise<EmailConfirmationResponse> {
    console.log(`Received email confirmation request for token ${token}`);

    try {
      const user = await UserModel.findOne({
        where: { tokenConfirmEmail: token },
      });

      if (user) {
        user.tokenConfirmEmail = "token";
        user.verified = true;
        await user.save();

        const tokenbcrypt = jwt.sign(
          user.toJSON(),
          process.env.JWT_TOKEN_SECRET!,
          {
            expiresIn: 86400,
          },
        );

        await ActiveSession.create({ token: tokenbcrypt, userId: user.userId });

        return { status: "ok", user: user, token: tokenbcrypt };
      } else {
        return { status: "error", errorMessage: "User not found" };
      }
    } catch (error) {
      console.error(error);
      return { status: "error", errorMessage: "Token invalid" };
    }
  }

  /**
   * Resends the email confirmation token.
   * @param {string} email
   * @returns {Promise<ResendEmailConfirmationResponse>} An object with a boolean property "status" indicating success or failure.
   */
  async resendEmailConfirmation(
    email: string,
  ): Promise<ResendEmailConfirmationResponse> {
    console.log(
      `Received resend email confirmation request for user with email ${email}`,
    );

    const existingUser = await UserModel.findOne({ where: { email: email } });
    if (existingUser) {
      const token = uuidv4();

      existingUser.tokenConfirmEmail = token;
      await existingUser.save();

      const mailer = new Send_mailer();
      const mailVerification = await mailer.send(
        email,
        "Confirmation mail",
        "Confirm token: " + token,
      );

      if (!mailVerification) {
        return { status: "error", errorMessage: "Email not sent" };
      }

      return { status: "ok" };
    } else {
      return { status: "error", errorMessage: "User not found" };
    }
  }

  /**
   *  Vote system
   *  @param {string} email
   *  @param {string} idConcurent
   *  @param {string} gender
   *  @returns {Promise<VoteResponse>} An object with a boolean property "status" indicating success or failure.
   */

  async voteConcurenti(
    email: string,
    idConcurent: string,
    gender: string,
    token: string,
  ): Promise<VoteResponse> {
    console.log(`Received vote request for user with email ${email}`);
    const existingUser = await UserModel.findOne({ where: { email: email } });

    const session = await ActiveSession.findOne({ where: { token: token } });
    if (!session) {
      return { status: "ERROR", errorMessage: "Invalid session token." };
    }

    let canVote;
    if (gender === "F") {
      canVote = existingUser?.voteFata === true ? false : true;
    } else if (gender === "M") {
      canVote = existingUser?.voteBaiat === true ? false : true;
    }

    if (canVote) {
      const concurent = await TabelaVoturi.findOne({
        where: { id: idConcurent },
      });

      await concurent?.increment("count", { by: 1 });
      await concurent?.save;

      if (gender === "F") {
        await existingUser?.update({ voteFata: true });
        await existingUser?.update({voteFataName: concurent?.name});
      } else if (gender === "M") {
        await existingUser?.update({ voteBaiat: true });
        await existingUser?.update({voteBaiatName: concurent?.name});
      }
    } else {
      return { status: "ERROR", errorMessage: "Ai votat deja" };
    }

    return { status: "ok" };
  }

  async canVote(email: string, token: string): Promise<CanVote> {
    const existingUser = await UserModel.findOne({ where: { email: email } });
    const session = await ActiveSession.findOne({ where: { token: token } });
    if (!session) {
      return {
        status: "no",
        statusF: false,
        statusB: false,
        errorMessage: "Invalid session token.",
      };
    }

    if (!existingUser) {
      return {
        status: "no",
        statusF: false,
        statusB: false,
        errorMessage: "User not found",
      };
    }

    const fata = existingUser?.voteFata === true ? false : true;
    const baiat = existingUser?.voteBaiat === true ? false : true;

    return { status: "ok", statusF: fata, statusB: baiat };
  }

  async getConcurenti(token:string): Promise<any> {
    const session = await ActiveSession.findOne({ where: { token: token } });
    if (!session) {
      return {
        status: "ERROR",
        errorMessage: "Invalid session token.",
      };
    }
    const getUser = await UserModel.findOne({ where: { userId: session.userId } })
    console.log(`Received getConcurenti request for user with token ${getUser?.email}`)
    if(getUser?.admin === "superadmin")
    {
      const concurenti = await TabelaVoturi.findAll();
      return {status:"ok",concurenti:concurenti};
    }
    else {
      return {
        status: "ERROR",
        errorMessage: "Invalid session token.",
      };
    }
  }
  async getUsers(token:string): Promise<any> {
    const session = await ActiveSession.findOne({ where: { token: token } });
    if (!session) {
      return {
        status: "ERROR",
        errorMessage: "Invalid session token.",
      };
    }
    const getUser = await UserModel.findOne({ where: { userId: session.userId } })
    console.log(`Received getUsers request for user with token ${getUser?.email}`)
    if(getUser?.admin === "admin" || getUser?.admin === "superadmin")
    {
      const users = await UserModel.findAll();
      return {status:"ok",users:users};
    }
    else {
      return {
        status: "ERROR",
        errorMessage: "Invalid session token.",
      };
    }
  }

  async isAdmin(token:string): Promise<any> {

    const session = await ActiveSession.findOne({ where: { token: token } });
    if (!session) {
      return {
        status: "ERROR",
        errorMessage: "Invalid session token.",
      };
    }
    const getUser = await UserModel.findOne({ where: { userId: session.userId } })
    console.log(`Received isAdmin request for user with token ${getUser?.email}`)
    if(getUser?.admin === "admin" || getUser?.admin === "superadmin")
    {
      return {status:"ok", admin:getUser?.admin};
    }
    else {
      return {
        status: "ERROR",
        errorMessage: "Invalid session token.",
      };
    }
  }
}
