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
      email || "",
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

      if (
        (!user.fata && concurent.sex === "F") ||
        (!user.baiat && concurent.sex === "M")
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
            scrollbar={false}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFlip, Keyboard, Navigation, Pagination]}
            className="mySwiper"
          >
            {concurentiOrder.map((concurent: Concurent, index: number) => (
              <SwiperSlide key={index}>
                <div className="m-20 ">
                  <div
                    className=" mt-10 mb-10 w-full h-full bg-cover duration-300 rounded-lg text-2xl scale-150"
                    style={{backgroundImage:`url(${BgButton})`}}
                  >
                    <h1 className="w-full text-center text-base"> {concurent.name}</h1>
                  </div>

                  <div className="w-full h-full object-cover object-left mx-auto ">
                    <img src={concurent.image} alt={`Image ${index}`} />
                  </div>
                  <button
                    onClick={() => handleVote(concurent)}
                    className=" mt-10 w-full h-full bg-cover duration-300 rounded-lg text-2xl "
                    style={{backgroundImage:`url(${BgButton})`}}
                  >
                    {(user.fata && concurent.sex === "F") || (user.baiat && concurent.sex === "M") ? (
                      <h1>Votează </h1>
                    ) : (
                      <h1>Ai votat!</h1>
                    )}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
