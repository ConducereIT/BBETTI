import React from "react";
import Rares from "../../../assets/img/ComponentImages/rares_singer.webp";
import RaresMobile from "../../../assets/img/ComponentImages/Rares_mobile.webp";

export default function Singer() {
  return (
    <>
      <div className=" w-full  h-full">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full">
            <img
              className=" hidden md:block rounded-full"
              src={Rares}
              alt="Singer"
            />
            <img
              className=" block md:hidden rounded-full"
              src={RaresMobile}
              alt="Singer"
            />
          </div>
          <div className=" text-white mt-10">
            <div className=" text-3xl font-bold flex justify-center">
              <p>Rareș Mariș</p>
            </div>
            <p className=" text-justify mx-8 text-xl my-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
