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
  const concurentiShuffled = shufflePairs(Concurenti);
  const [openDivs, setOpenDivs] = useState<boolean[]>(
    concurentiShuffled.map(() => false),
  );

  const [user, setUser] = useState({
    fata: true,
    baiat: true,
  });

  const [error, setError] = useState("");

  const toggleOpen = (index: number) => {
    const updatedOpenDivs = [...openDivs];
    updatedOpenDivs[index] = !updatedOpenDivs[index];
    setOpenDivs(updatedOpenDivs);
  };

  const handleVote = async (concurent: Concurent) => {
    try {
      const userV = await serverFunction.checkSession(
        window.localStorage.getItem("token") || "",
      );

      if (!userV) {
        throw new Error("Login first");
      }

      if (
        (user.fata && concurent.sex === "F") ||
        (user.baiat && concurent.sex === "M")
      ) {
        alert("Ai votat");
        return;
      }
      if (userV.status == "ok") {
        const email = window.localStorage.getItem("email" || " ");

        const voteStatus = await serverFunction.voteConcurenti(
          email || " ",
          concurent.idConcurent,
          concurent.sex,
          window.localStorage.getItem("token") || "",
        );

        if (voteStatus.status != "ok") {
          throw new Error(`${voteStatus.status}`);
        }
      }
    } catch (error) {
      setError(`${error}`);
    }
  };

  useEffect(() => {
    const vote = async () => {
      const email = localStorage.getItem("email");
      const ceva = await serverFunction.canVote(
        email || "",
        window.localStorage.getItem("token") || "",
      );
      setUser({ fata: ceva.statusF, baiat: ceva.statusB });
    };

    vote();
  }, []);

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
                          {(user.fata && concurent.sex === "F") ||
                          (user.baiat && concurent.sex === "M") ? (
                            <h1>voteaza {`${concurent.sex}`}</h1>
                          ) : (
                            <h1>Ai votat</h1>
                          )}
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
