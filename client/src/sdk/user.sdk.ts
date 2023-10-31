/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class User {
  static remote = new Remote("https://4cohjr5asglbhw6hpesjr6ddxe0cencm.lambda-url.eu-central-1.on.aws/User");

  static async helloWorld(): Promise<string> {
    return await User.remote.call("User.helloWorld");
  }
}

export { Remote };
