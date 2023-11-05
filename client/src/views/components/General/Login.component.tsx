import React from "react";
import bg_image from "../../../assets/img/Background/back-landing-page.webp";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
export default function LoginComp() {
  return (
    <>
      <div
        className="h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div>
          <form className="bg-black/90 p-6 px-4 md:p-10 md:px-24">
            <label className="mb-4">
              <div className="my-5 md:my-5 flex">
                <AiOutlineMail color="white" className="text-3xl md:text-4xl" />
                <input
                  type="text"
                  maxLength={80}
                  placeholder="Email"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                />
              </div>
            </label>
            <label className="mb-6">
              <div className="my-5 md:my-5 flex">
                <AiFillLock color="white" className="text-3xl md:text-4xl" />
                <input
                  type="password"
                  maxLength={80}
                  placeholder="Password"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                />
              </div>
            </label>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-white" />
                <p className="text-white text-sm">Remember Me</p>
              </label>
              <a href="/forgot-password" className="text-white text-sm">
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-center mt-10 bg-gray-500/60 py-4">
              <button className="text-white w-full" type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
