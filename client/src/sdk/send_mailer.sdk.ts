/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class Send_mailer {
  static remote = new Remote("http://127.0.0.1:8083/Send_mailer");

  static async send(_to: any, _subject: string, _text: string): Promise<boolean> {
    return await Send_mailer.remote.call("Send_mailer.send", _to, _subject, _text);
  }
}

export { Remote };
