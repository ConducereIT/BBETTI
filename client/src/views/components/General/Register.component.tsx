import React, { useState } from "react";
import bg_image from "../../../assets/img/Background/back-landing-page.webp";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import { UserServicePostgresql as serverFunction } from "../../../sdk/userServicePostgresql.sdk";

const RegisterComp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSummit = async (event: any) => {
    event.preventDefault();

    const emailRegex = /.*@.*\.upb\.ro/;
    if (!emailRegex.test(user.email)) {
      setError("Foloseste un mail valabil de la UPB ");
      return;
    } else {
      setError("");
    }

    if (user.confirmationPassword !== user.password) {
      setError("Parolele nu corespund");
      return;
    } else {
      setError("");
    }

    const status = await serverFunction.register(user.email, user.password);

    const info = status.status;

    if (info == "ok") {
      localStorage.setItem("email", user.email);
      window.location.replace("/otp");
    } else setError(`${status.errorMessage}`);
  };

  return (
    <>
      <div
        className="h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div>
          <form className="bg-black/90 p-6 px-4 md:p-10 md:px-24">
            <h1 className="text-white text-center ">{error ? error : ""}</h1>
            <label className="mb-4">
              <div className="my-5 md:my-5 flex">
                <AiOutlineMail color="white" className="text-3xl md:text-4xl" />
                <input
                  name="email"
                  value={user.email}
                  type="text"
                  maxLength={80}
                  placeholder="Email"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                  onChange={handleChange}
                />
              </div>
            </label>
            <label className="mb-6">
              <div className="my-5 md:my-5 flex">
                <AiFillLock color="white" className="text-3xl md:text-4xl" />
                <input
                  name="password"
                  value={user.password}
                  type="password"
                  maxLength={80}
                  placeholder="Password"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                  onChange={handleChange}
                />
              </div>
            </label>
            <label className="mb-6">
              <div className="my-5 md:my-5 flex">
                <AiFillLock color="white" className="text-3xl md:text-4xl" />
                <input
                  name="confirmationPassword"
                  value={user.confirmationPassword}
                  type="password"
                  maxLength={80}
                  placeholder="Confirmation Password"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                  onChange={handleChange}
                />
              </div>
            </label>

            <div className="flex justify-center mt-10 bg-gray-500/60 py-4">
              <button
                onClick={handleSummit}
                className="text-white w-full"
                type="submit"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterComp;
