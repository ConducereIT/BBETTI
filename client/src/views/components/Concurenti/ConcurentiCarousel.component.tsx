import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  EffectFlip,
} from "swiper/modules";
import { useState } from "react";

import { Concurenti } from "../../../assets/config/Concurenti";

import { UserServicePostgresql as serverFunction } from "../../../sdk/userServicePostgresql.sdk";

interface Concurent {
  image: string;
  id: number;
  name: string;
  description: string;
  sex: string;
}

export default function ConcurentiCarousel() {
  const [openDivs, setOpenDivs] = useState<boolean[]>(
    Concurenti.map(() => false)
  );

  const [error, setError] = useState("");

  const toggleOpen = (index: number) => {
    const updatedOpenDivs = [...openDivs];
    updatedOpenDivs[index] = !updatedOpenDivs[index];
    setOpenDivs(updatedOpenDivs);
  };

  const handleVote = async (concurent: Concurent) => {
    try {
      const user = await serverFunction.checkSession(
        window.localStorage.getItem("token") || ""
      );

      if (!user) {
        throw new Error("Login first");
      }

      if (user.status == "ok") {
      }
    } catch (error) {
      console.error("Vote failed", error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="h-[50%] w-[60%]">
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
            {Concurenti.map((concurent: Concurent, index: number) => (
              <SwiperSlide key={index}>
                <div className="m-20">
                  <div className="w-full h-full object-cover object-left mx-auto">
                    <img src={concurent.image} alt={`Image ${index}`} />
                  </div>
                  <button
                    onClick={() => toggleOpen(index)}
                    className="px-4 py-1 mt-10 w-full h-full bg-white duration-300 rounded-lg text-2xl"
                  >
                    Vote
                  </button>

                  {openDivs[index] ? (
                    <div className="absolute h-[50%] w-[50%] center bg-gray-100 top-0">
                      <div>
                        <div className="w-auto h-auto object-cover object-left mx-auto">
                          <img src={concurent.image} alt={`Image ${index}`} />
                        </div>
                        <button
                          className="sticky bottom-0 p-10 bg-green-400 text-white w-[100%]"
                          onClick={() => handleVote(concurent)} // Handle vote click
                        >
                          <h1>voteaza {`${concurent.sex}`}</h1>
                        </button>
                        <button
                          className="sticky bottom-0 p-10 bg-blue-400 text-white w-[100%]"
                          onClick={() => toggleOpen(index)}
                        >
                          Inchide
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
