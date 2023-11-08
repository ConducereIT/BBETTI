import React, { useState } from "react";
import bg_image from "../../../assets/img/Background/back-landing-page.webp";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import { UserServicePostgresql as serverFunction } from "../../../sdk/userServicePostgresql.sdk";

export default function ResetPasswordConfirmComp() {
  const [user, setUser] = useState({
    token: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSummit = async (event: any) => {
    event.preventDefault();

    const status = await serverFunction.resetPassword(user.token);

    if (status.status == "ok") {
      window.localStorage.setItem("email", user.token);
      window.location.replace("/resetpassword");
    } else {
      setError(`${status.errorMessage}`);
    }
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
                  name="token"
                  value={user.token}
                  type="text"
                  placeholder="Email"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                  onChange={handleChange}
                />
              </div>
            </label>

            <div className="flex items-center justify-between mb-6"></div>
            <div className="flex justify-center mt-10 bg-gray-500/60 py-4">
              <button
                onClick={handleSummit}
                className="text-white w-full"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
