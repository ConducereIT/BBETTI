/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class User {
  static remote = new Remote("http://127.0.0.1:8083/User");

  static async helloWorld(): Promise<string> {
    return await User.remote.call("User.helloWorld");
  }
}

export { Remote };
