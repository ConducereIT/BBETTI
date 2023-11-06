import React, { useState } from "react";
import bg_image from "../../../assets/img/Background/back-landing-page.webp";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import { UserServicePostgresql as serverFunction } from "../../../sdk/userServicePostgresql.sdk";

export default function LoginComp() {
  const [user, setUser] = useState({
    email: localStorage.getItem("email") || "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleForgot = async (event: any) => {
    event.prevendDefault();

    const status = await serverFunction.resetPassword(user.email);

    if (status.status != "ok") {
      setError(`${status.errorMessage}`);
    }
  };

  const handleSummit = async (event: any) => {
    event.preventDefault();

    const status = await serverFunction.login(user.email, user.password);

    const info = status.status;

    if (info == "ok" && status.user?.verified == true) {
      localStorage.setItem("email", user.email);
      const status = await serverFunction.getToken(user.email);

      if (status.status == "ok") {
        localStorage.setItem("token", status.token || "");
      }
      window.location.replace("/");
    } else if (info == "ok" && !status.user?.verified) {
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
          <h1 className="text-white text-center">{error ? error : ""}</h1>
          <form className="bg-black/90 p-6 px-4 md:p-10 md:px-24">
            <label className="mb-4">
              <div className="my-5 md:my-5 flex">
                <AiOutlineMail color="white" className="text-3xl md:text-4xl" />
                <input
                  name="email"
                  value={user.email}
                  type="text"
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
                  placeholder="Password"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                  onChange={handleChange}
                />
              </div>
            </label>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-white" />
                <p className="text-white text-sm">Remember Me</p>
              </label>
              <button onClick={handleForgot} className="text-white text-sm">
                Forgot Password?
              </button>
            </div>
            <div className="flex justify-center mt-10 bg-gray-500/60 py-4">
              <button
                onClick={handleSummit}
                className="text-white w-full"
                type="submit"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
