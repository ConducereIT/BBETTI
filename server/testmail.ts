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
