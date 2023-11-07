import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { UserServicePostgresql as serverFunction } from "../../../sdk/userServicePostgresql.sdk";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const CheckSS = async () => {
      const status = await serverFunction.checkSession(token || "null");

      if (status.status == "ok") {
        setIsAuth(true);
      }
    };

    CheckSS();
  }, []);

  const handleLogOut = () => {
    window.localStorage.clear();
  };

  return (
    <>
      <div className=" fixed top-0 z-10 opacity-75 rounded-div flex items-center justify-between h-20 font-bold w-full bg-black text-white md:px-8">
        <a href="/">
          <h1 className="text-2xl uppercase pl-2 select-none">
            Balul Bobocilor
          </h1>
        </a>
        <div className=" hidden md:block">
          <a
            href="/concurenti"
            className=" p-4 duration-300 hover:text-blue-600 no-underline"
          >
            {" "}
            Concurenți
          </a>
          <a
            href="/sponsori"
            className=" no-underline p-4 duration-300 hover:text-blue-600 px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
          >
            {" "}
            Sponsori
          </a>
          {isAuth != true ? (
            <a
              href="/login"
              className=" no-underline duration-300 hover:text-blue-600 px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
            >
              {" "}
              Log in
            </a>
          ) : (
            <a
              href="/"
              onClick={handleLogOut}
              className=" no-underline duration-300 hover:text-blue-600 px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
            >
              {" "}
              Logout
            </a>
          )}
        </div>
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer z-10 pr-4"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed right-0 top-20 flex flex-col items-center justify-between w-full h-fit border-b-2 border-l-2 border-t-2 bg-black ease-in duration-500 z-10 "
              : "fixed right-[-100%] w-full top-20 h-fit flex flex-col items-center justify-between ease-in duration-500"
          }
        >
          <ul className="w-full p-4 ">
            <li className=" py-6 border-b">
              <a href="/concurenti">Concurenți</a>
            </li>
            <li className=" py-6 border-b">
              <a href="/contact">Contact</a>
            </li>
            <li className=" py-6 border-b">
              <a href="/login">Log in</a>
            </li>
            <li className=" py-6 border-b">
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
