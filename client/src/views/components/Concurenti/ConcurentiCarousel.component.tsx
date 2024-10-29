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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import BgButton from "../../../assets/img/items/bara-vot.webp"

import { Concurenti } from "../../../assets/config/Concurenti";
import { UserServicePostgresql as serverFunction } from "../../../sdk/userServicePostgresql.sdk";

interface Concurent {
  image: string;
  idConcurent: string;
  name: string;
  description: string;
  sex: string;
}

function shufflePairs(array:any) {
  let pairs = [];

  for (let i = 0; i < array.length; i += 2) {
    if (array[i + 1] !== undefined) {
      pairs.push([array[i], array[i + 1]]);
    } else {
      pairs.push([array[i]]);
    }
  }

  pairs.sort(() => Math.random() - 0.5);

  return pairs.reduce((acc, pair) => acc.concat(pair), []);
}


export default function ConcurentiCarousel() {
  const navigate = useNavigate();
  const [concurentiOrder, setConcurentiOrder] = useState<Concurent[]>([]);

  useEffect(() => {
    const shuffledConcurenti = shufflePairs(Concurenti);
    setConcurentiOrder(shuffledConcurenti);
  }, []);

  const [openDivs, setOpenDivs] = useState<boolean[]>(concurentiOrder.map(() => false));

  const [user, setUser] = useState({
    fata: true,
    baiat: true,
  });

  const [error, setError] = useState("");


  const vote = async () => {
    const email = localStorage.getItem("email");
    const ceva = await serverFunction.canVote(
      window.localStorage.getItem("email") || "",
      window.localStorage.getItem("token") || "",
    );
    setUser({ fata: ceva.statusF, baiat: ceva.statusB });
  };


  useEffect(() => {
    if (localStorage.getItem("token")) {
      vote();
    }
  }, []);

  const handleVote = async (concurent: Concurent) => {
    try {
      if (!localStorage.getItem("token")) {
        throw new Error("Login first");
      }
      const userV = await serverFunction.checkSession(
        window.localStorage.getItem("token") || "",
      );

      if (!userV) {
        throw new Error("Login first");
      }

      if (userV.status == "ok") {
        const email = window.localStorage.getItem("email");

        const voteStatus = await serverFunction.voteConcurenti(
          window.localStorage.getItem("email") || "",
          concurent.idConcurent,
          concurent.sex,
          window.localStorage.getItem("token") || "",
        );

        if (voteStatus.status != "ok") {
          throw new Error(`${voteStatus.status}`);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setError(`${error}`);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="md:h-[50%] w-[60%]">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
            }}
            scrollbar={false}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFlip, Keyboard, Navigation, Pagination]}
            className="mySwiper"
          >
            {concurentiOrder.map((concurent: Concurent, index: number) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="mt-20 md:m-20">
                  <div
                    className="bg-cover duration-300 rounded-lg text-center scale-125"
                    style={{ backgroundImage: `url(${BgButton})` }}
                  >
                    <h1 className="text-base scale-75 md:text-xl xl:text-xl">{concurent.name}</h1>
                  </div>

                  <div className="my-4">
                    <img
                      className="mx-auto rounded-lg"
                      src={concurent.image}
                      alt={`Concurent ${concurent.name}`}
                    />
                  </div>

                  {/* <button
                    onClick={() => handleVote(concurent)}
                    className="w-full bg-cover duration-300 rounded-lg py-2 text-xl md:mt-10 h-full "
                    style={{ backgroundImage: `url(${BgButton})` }}
                  >
                    {(user.fata && concurent.sex === "F") || (user.baiat && concurent.sex === "M") ? (
                      <span>Voteaza!</span>
                    ) : (
                      <span>Ai votat!</span>
                    )}
                  </button> */

                      <button className="w-full bg-cover duration-300 rounded-lg py-2 text-xl md:mt-10 h-full "
                      style={{ backgroundImage: `url(${BgButton})`, cursor: 'default', fontWeight: "bold"}} >Voting Available Soon</button>
                  }

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
