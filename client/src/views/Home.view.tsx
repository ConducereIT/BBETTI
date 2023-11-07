import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Header from "./components/General/Header";
import Elvis from "../assets/img/posters/elvis.webp";
import Jackson from "../assets/img/posters/jackson.webp";
import Abba from "../assets/img/posters/abba.webp";
import Nirvana from "../assets/img/posters/nirvana.webp";
import Ray from "../assets/img/posters/ray.webp";
import Sinatra from "../assets/img/posters/Sinatra.webp";
import Travolta from "../assets/img/items/50s/travolta.webp";
import Mercedes300 from "../assets/img/items/50s/mercedes_300sl.webp";
import Beatles from "../assets/img/posters/beatles.webp";
import Furtuna from "../assets/img/concurenti/portrait_teodor_furtuna.webp";
import Dinut from "../assets/img/concurenti/portrait_cosmin_dinut.webp";
import Beyonce from "../assets/img/posters/beyonce.webp";
import Background from "../assets/img/Background/back-landing-page.webp";
import Boy50s from "../assets/img/concurenti/50s-avram.webp";
import Girl50s from "../assets/img/concurenti/50s-mocanca.webp";
import Boy60s from "../assets/img/concurenti/60s - Belu.webp";
import Girl60s from "../assets/img/concurenti/60s - Ungureanu.webp";
import Boy70s from "../assets/img/concurenti/70s - Minculescu.webp";
import Girl70s from "../assets/img/concurenti/70s - Georgescu.webp";
import Boy80s from "../assets/img/concurenti/80s - Dragomir.webp";
import Girl80s from "../assets/img/concurenti/80s - Băcanu.webp";
import Girl90s from "../assets/img/concurenti/90s - Colcer.webp";
import Boy90s from "../assets/img/concurenti/90s - Ilinca.webp";
import Boy00s from "../assets/img/concurenti/00s - Badea.webp";
import Girl00s from "../assets/img/concurenti/00s-Ambrozie.webp";
import Right60s from "../assets/img/items/60s/60s-the-beatles.webp";
import Left60s from "../assets/img/items/60s/60s_movie.webp";
import Right70s from "../assets/img/items/70s/70s-right.webp";
import Left70s from "../assets/img/items/70s/70s-left.webp";
import Right80s from "../assets/img/items/80s/80s-right.webp";
import Left80s from "../assets/img/items/80s/80s-left.webp";
import Right90s from "../assets/img/items/90s/90s-right.webp";
import Left90s from "../assets/img/items/90s/90s-left.webp";
import Right00s from "../assets/img/items/00s/00s-right.webp";
import Left00s from "../assets/img/items/00s/00s-left.webp";

import "intersection-observer";
import Singer from "./components/General/Singer.component";
import Pachete from "./components/General/Pachete.component";
import Description from "./components/General/Description.component";
import Locatie from "./components/General/Locatie.component";
import MasterCeremonies from "./components/General/MasterCeremonies.component";
import Gallery from "./components/General/Gallery.component";
import Footer from "./components/General/Footer.component";

const Home = () => {
  const parallax = useRef<IParallax>(null!);

  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      // Restul codului pentru gestionarea observării
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div>
        <Parallax ref={parallax} pages={7.51}>
          <ParallaxLayer
            offset={0}
            factor={8}
            speed={0}
            style={{
              backgroundColor: "#000000",
              backgroundSize: "cover",
            }}
          >
            <div
              className="w-full h-screen absolute top-0 left-0"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                <h1 className="sm:text-5xl text-4xl text-white font-bold bg-black/70 p-10 rounded-full">
                  Balul Bobocilor
                </h1>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${Elvis})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between m-4 ">
              <img
                alt="fata 50s"
                src={Girl50s}
                className="transform md:w-[17%] w-[40%] rotate-6"
              />

              <img
                alt="baiat 50s"
                src={Boy50s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="ray charles"
                src={Ray}
                className="transform -rotate-6 md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Sinatra}
                className=" rotate-6  md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.4} factor={1.1} speed={0.5}>
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Description />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${Beatles})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between m-4 ">
              <img
                alt="fata 60s"
                src={Girl60s}
                className="transform md:w-[17%] w-[40%] rotate-6"
              />

              <img
                alt="baiat 60s"
                src={Boy60s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="ray charles"
                src={Right60s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
              <img
                alt="Sintra"
                src={Left60s}
                className="  md:w-[17%] w-[40%] rotate-6"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%] ">
                <Singer />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${Abba})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between m-4">
              <img
                alt="baiat 70s"
                src={Boy70s}
                className="transform md:w-[17%] w-[40%] rotate-6"
              />
              <img
                alt="fata 70s"
                src={Girl70s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="ray charles"
                src={Left70s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
              <img
                alt="Sintra"
                src={Right70s}
                className="  md:w-[17%] w-[40%] rotate-6"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <MasterCeremonies />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${Jackson})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between m-4">
              <img
                alt="fata 80s"
                src={Girl80s}
                className="transform md:w-[17%] w-[40%] rotate-6"
              />
              <img
                alt="baiat 80s"
                src={Boy80s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="ray charles"
                src={Left80s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
              <img
                alt="Sintra"
                src={Right80s}
                className=" rotate-6  md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Pachete />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${Nirvana})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between m-4">
              <img
                alt="fata 90s"
                src={Girl90s}
                className="transform md:w-[17%] w-[40%] rotate-6"
              />

              <img
                alt="baiat 90s"
                src={Boy90s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="ray charles"
                src={Left90s}
                className="transform -rotate-6 md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Right90s}
                className=" md:w-[17%] w-[40%] rotate-6"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Gallery />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${Beyonce})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between m-4">
              <img
                alt="fata 00s"
                src={Girl00s}
                className="transform md:w-[17%] w-[40%] rotate-6"
              />

              <img
                alt="baiat 00s"
                src={Boy00s}
                className="transform md:w-[17%] w-[40%] -rotate-6"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="ray charles"
                src={Left00s}
                className="transform -rotate-6 md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Right00s}
                className=" rotate-6 md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={6.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Locatie />
              </div>
            </div>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Home;
