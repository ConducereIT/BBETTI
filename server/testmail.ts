import { Send_mailer } from "./mailer";


(async () => {
 
  const mailer = new Send_mailer();
  const success = await mailer.send(
    "cristiansalafenco@gmail.com",
    "Test trimitere mail",
    "Salut! Dacă vezi acest mesaj, trimiterea merge ✅"
  );
  console.log("Rezultat:", success);
})();


// Pentru a rula acest test, asigură-te că ai setate variabilele de mediu necesare în fișierul .env:
// MAIL_HOST, MAIL_SERVICE, MAIL_USER, MAIL_PASS
// Apoi execută comanda: npx ts-node server/testmail.ts
// Asigură-te că ai instalat pachetele necesare: nodemailer, dotenv, ts-node și typescript.
// nu uita sa modifici adresa de email destinatară cu una validă pentru testare. mail@gmail.com