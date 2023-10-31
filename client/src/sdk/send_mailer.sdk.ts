/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class Send_mailer {
  static remote = new Remote("https://4ka6wy22arkiwyanaui53utbqy0qvjky.lambda-url.eu-central-1.on.aws/Send_mailer");

  static async send(_from: any, _to: any, _subject: string, _text: string) {
    return await Send_mailer.remote.call("Send_mailer.send", _from, _to, _subject, _text);
  }
}

export { Remote };
