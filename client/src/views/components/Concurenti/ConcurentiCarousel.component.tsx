// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Concurenti } from "../../../assets/config/Concurenti";

// import required modules
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  EffectFlip,
} from "swiper/modules";

export default function ConcurentiCarousel() {
  return (
    <>
      <div className=" flex justify-center">
        <div className="h-1/2 w-1/2">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFlip, Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            {Concurenti.map((concurent, index) => (
              <SwiperSlide>
                <div>
                  <div className="w-full h-full object-cover object-left mx-auto">
                    <img src={concurent.image} />
                  </div>
                  <div className="w-full h-full absolute top-0 left-0 hover:bg-black/50 duration-500 ">
                    <div className="text-transparent hover:text-white w-full h-full grid place-items-center">
                      <p className=" text-3xl mt-10 font-bold">
                        {concurent.name}
                      </p>
                      <p className=" m-4 mt-5 text-lg">
                        {concurent.description}
                      </p>
                      <div className="">
                        <button className="px-4 py-2 bg-transparent hover:bg-blue-600 duration-300 rounded-lg text-2xl ">
                          Vote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
