import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import { GalleryImages } from "../../../assets/config/GalleryConfig";

export default function Gallery() {
  return (
    <>
      <div className=" mt   -10">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {GalleryImages.map((image, index) => (
            <SwiperSlide>
              <img
                src={image.imageDesktop}
                alt={image.alt}
                className="hidden md:block"
              />
              <img
                src={image.imageMobile}
                alt={image.alt}
                className="block md:hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
