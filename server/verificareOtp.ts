// import { sequelize, UserTable } from "./db";
// import { Sequelize } from "sequelize";
// import { User } from "./user";

// export type CheckUserOTP = {
//   status: boolean;
//   message: string;
//   mail?: string;
//   token?: string;
// };

// export class verificareOTP {
//   private sequelize: Sequelize;

//   constructor() {
//     this.sequelize = sequelize;
//   }

//     async verificareOTP(code: number, email: string): Promise<CheckUserOTP> {
//       try {
//         const stringCode = code.toString();
//         // Find the user with the provided code and email
//         const user = await UserTable.findOne({
//           where: { code: stringCode, email: email },
//         });

//   //       if (user) {
//   //         if (user.status === "verified") {
//   //           return { status: true, message: "Cont deja valid", mail: email };
//   //         } else {
//   //           // Update the user's status and code in the database
//   //           await UserTable.update({
//   //             where: { id: user.id },
//   //             data: { code: "0", status: "verified" },
//   //           });

//   //           const token = jwt.sign(user, process.env.SECRET_KEY_JWT!, {
//   //             expiresIn: 3600, // 1 day
//   //           });
//   //           const activeSession = await this.prisma.session.create({
//   //             data: {
//   //               email: email,
//   //               token: token,
//   //             },
//   //           });
//   //           if (activeSession)
//   //             return { status: true, message: "Sesiune start!", token: token };
//   //           else {
//   //             return {
//   //               status: false,
//   //               message: "Eroare interna. Te rog reincearca mai tarziu!",
//   //             };
//   //           }
//   //         }
//   //       } else {
//   //         // Check if user exists with the provided email
//   //         const existingUser = await UserTable.findOne({
//   //           where: { email: email },
//   //         });

//   //         if (existingUser) {
//   //           return {
//   //             status: false,
//   //             message: "Ati introdus codul gresit!",
//   //             mail: email,
//   //           };
//   //         } else {
//   //           return {
//   //             status: false,
//   //             message: "Eroare baza de date",
//   //           };
//   //         }
//           return {
//             status: false,
//             message: "Eroare interna. Te rog reincearca mai tarziu!",
//           };
//         }
//       } catch (error) {
//         console.error(error);
//         return {
//           status: false,
//           message: "Eroare interna. Te rog reincearca mai tarziu!",
//         };
//       }
//     }
// }
