import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
import { ActiveSession } from "./models/userPostgresql";

dotenv.config();

export type AuthResponse = {
  success: boolean;
  errorMessage?: string;
};

export async function validatePassword(
  saltedPassword: string,
  password: string
): Promise<boolean> {
  return new Promise((resolve) => {
    bcrypt.compare(password, saltedPassword, async function (err, res) {
      if (err) {
        throw err;
      }

      if (res) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        throw err;
      }

      if (!salt) {
        throw new Error("Failed to generate salt");
      }

      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          throw err;
        }

        if (!hash) {
          throw new Error("Failed to hash password");
        }

        resolve(hash);
      });
    });
  });
}

export const POSTGRESQL_DB_URI = process.env.DB_URL_POSTGRESQL!;
