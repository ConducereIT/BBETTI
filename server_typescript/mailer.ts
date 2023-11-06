import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

export class Send_mailer {
  async send(_to: any, _subject: string, _text: string): Promise<boolean> {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: _to,
      subject: _subject,
      text: _text,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
