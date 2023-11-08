import React from "react";

export default function MasterCeremonies() {
  return (
    <>
      <div className=" w-full  h-full flex items-center justify-center">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full">
            <img
              className=" hidden md:block rounded-lg"
              src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
              alt="MasterOfCeremonies"
            />
            <img
              className=" block md:hidden rounded-lg"
              src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=800&height=550"
              alt="MasterOfCeremonies"
            />
          </div>
          <div className=" text-gray-300 mt-20">
            <div className=" text-3xl font-bold flex justify-center">
              <p>MC Care o fi</p>
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
