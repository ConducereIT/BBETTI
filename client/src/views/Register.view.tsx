import React, { useState } from "react";
// import { RegisterController } from "../sdk/RegisterController";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passconfirm: "",
  });

  const [eroare, setEroare] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // const info = await RegisterController.createUser(
    //   user.username,
    //   user.email,
    //   user.password,
    //   user.passconfirm
    // );

    // const check = info.status;

    // if (check) {
    //   localStorage.set("email", user.email);
    //   window.location.replace("/");
    // } else {
    //   setEroare(info.message);
    // }
  };

  return (
    <>
      <div>
        <form className="register-form" onSubmit={handleSubmit}>
          <p>{eroare ? eroare : ""}</p>

          <label htmlFor="username">Nume Complet</label>
          <input
            value={user.username}
            name="username"
            onChange={handleChange}
            id="username"
            placeholder="username"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            value={user.email}
            onChange={handleChange}
            type="email"
            placeholder="nume@stud.etti.upb.ro"
            id="email"
            name="email"
            required
          />
          <label htmlFor="password">Parola</label>
          <input
            value={user.password}
            onChange={handleChange}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <label htmlFor="password">Confirmare Parola</label>
          <input
            value={user.passconfirm}
            onChange={handleChange}
            type="passconfirm"
            placeholder="********"
            id="passconfirm"
            name="passconfirm"
            required
          />

          <button type="submit" className="button-form">
            Înregistrează-mă
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
