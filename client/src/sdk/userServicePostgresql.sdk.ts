/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";
import { UserLoginResponse, CheckSessionResponse, GetToken, ResetPasswordResponse, ResetPasswordConfirmResponse, EmailConfirmationResponse, ResendEmailConfirmationResponse, VoteResponse, CanVote } from "./models/typeUser";


export class UserServicePostgresql {
  static remote = new Remote("http://127.0.0.1:8083/UserServicePostgresql");

  static async register(email: string, password: string): Promise<UserLoginResponse> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.register", email, password);
  }
  static async login(email: string, password: string): Promise<UserLoginResponse> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.login", email, password);
  }
  static async checkSession(token: string): Promise<CheckSessionResponse> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.checkSession", token);
  }
  static async getToken(email: string): Promise<GetToken> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.getToken", email);
  }
  static async resetPassword(email: string): Promise<ResetPasswordResponse> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.resetPassword", email);
  }
  static async resetPasswordConfirmation(token: string, password: string): Promise<ResetPasswordConfirmResponse> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.resetPasswordConfirmation", token, password);
  }
  static async emailConfirmation(token: string): Promise<EmailConfirmationResponse> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.emailConfirmation", token);
  }
  static async resendEmailConfirmation(email: string): Promise<ResendEmailConfirmationResponse> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.resendEmailConfirmation", email);
  }
  static async voteConcurenti(email: string, idConcurent: string, gender: string, token: string): Promise<VoteResponse> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.voteConcurenti", email, idConcurent, gender, token);
  }
  static async canVote(email: string, token: string): Promise<CanVote> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.canVote", email, token);
  }
  static async getConcurenti(token: string): Promise<any> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.getConcurenti", token);
  }
  static async getUsers(token: string): Promise<any> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.getUsers", token);
  }
  static async isAdmin(token: string): Promise<any> {
    return await UserServicePostgresql.remote.call("UserServicePostgresql.isAdmin", token);
  }
}

export { Remote };
