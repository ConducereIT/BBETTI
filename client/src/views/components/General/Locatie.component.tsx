import React from "react";

export default function Locatie() {
  return (
    <>
      <div
        className="flex justify-center text-4xl "
        data-swiper-parallax="-200"
      >
        <p className="font-bold text-gray-300  mb-10 text-center">
          Where memories are made{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-4 place-items-center md:mx-5">
        <div className="md:pl-4 md:col-span-1 flex justify-center"></div>
        <div className="md:pl-4 md:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.38213006325!2d26.056968675920366!3d44.44583500080703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff43e84924b7%3A0xd7d29c402c5b373f!2sONE%20Club!5e0!3m2!1sro!2sro!4v1698572663920!5m2!1sro!2sro"
            width="300"
            height="300"
            loading="lazy"
            className="rounded-lg block md:hidden"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.38213006325!2d26.056968675920366!3d44.44583500080703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff43e84924b7%3A0xd7d29c402c5b373f!2sONE%20Club!5e0!3m2!1sro!2sro!4v1698572663920!5m2!1sro!2sro"
            width="600"
            height="450"
            loading="lazy"
            className="rounded-lg hidden md:block"
          ></iframe>
        </div>
      </div>
      <div className="mt-10 md:mt-0 text-gray-300">
        <p className="text-4xl font-bold mb-4 text-center mt-10">ONE Club</p>
        <p className="text-xl text-center ">
          Șoseaua Orhideelor 1, București 060071
        </p>
      </div>
    </>
  );
}
