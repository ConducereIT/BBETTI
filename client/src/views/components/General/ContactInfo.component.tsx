// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Furtuna from "../../../assets/img/concurenti/portrait_teodor_furtuna.webp";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function ContactInfo() {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper h-full rounded-lg bg-slate-400"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div
            className="flex justify-center text-4xl mt-10"
            data-swiper-parallax="-200"
          >
            <p>Despre BBETTI</p>
          </div>
          <div
            className="m-10 text-justify text-xl"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center text-4xl mt-10"
            data-swiper-parallax="-200"
          >
            <p>Program eveniment</p>
          </div>
          <div
            className="m-10 text-justify text-xl"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center text-4xl my-5"
            data-swiper-parallax="-200"
          >
            <p className=" font-bold">Locatie</p>
          </div>
          <div className=" grid md:grid-cols-4 place-items-center md:mx-5">
            <div className=" md:pl-4 md:col-span-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.38213006325!2d26.056968675920366!3d44.44583500080703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff43e84924b7%3A0xd7d29c402c5b373f!2sONE%20Club!5e0!3m2!1sro!2sro!4v1698572663920!5m2!1sro!2sro"
                width="300"
                height="300"
                loading="lazy"
                className=" rounded-lg block md:hidden"
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.38213006325!2d26.056968675920366!3d44.44583500080703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff43e84924b7%3A0xd7d29c402c5b373f!2sONE%20Club!5e0!3m2!1sro!2sro!4v1698572663920!5m2!1sro!2sro"
                width="600"
                height="450"
                loading="lazy"
                className=" rounded-lg hidden md:block"
              ></iframe>
            </div>
            <div className="mt-10 md:mt-0">
              <p className=" text-4xl font-bold mb-4 text-center">One Club</p>
              <p className=" text-xl text-center ">
                Șoseaua Orhideelor 1, București 060071
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
