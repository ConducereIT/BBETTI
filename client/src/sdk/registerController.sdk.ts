/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";

export type CreateUserResponse = {status: boolean, message: string};

export class RegisterController {
  static remote = new Remote("https://7u7u7ttdvzvtu6sagac4fc7lxy0eiumb.lambda-url.eu-central-1.on.aws/RegisterController");

  static async createUser(username: string, email: string, password: string, confirmedPassword: string): Promise<CreateUserResponse> {
    return await RegisterController.remote.call("RegisterController.createUser", username, email, password, confirmedPassword);
  }
  static async testDb() {
    return await RegisterController.remote.call("RegisterController.testDb");
  }
}

export { Remote };
