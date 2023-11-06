import React from "react";

export default function Singer() {
  return (
    <>
      <div className=" h-[100%] w-[100%] ">
        <div className="h-[100%] w-[100%] flex justify-center items-center ">
          <img
            alt="smiley"
            className=" rounded-lg hidden md:block"
            src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=800&height=500"
          />
          <img
            alt="smiley"
            className=" rounded-lg block md:hidden"
            src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=500&height=800"
          />
        </div>
      </div>
    </>
  );
}
