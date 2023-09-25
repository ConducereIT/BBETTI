import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Header from "./components/General/Header";
import Elvis from "../assets/img/posters/elvis.webp";
import Jackson from "../assets/img/posters/jackson.webp";
import Abba from "../assets/img/posters/abba.webp";
import Nirvana from "../assets/img/posters/nirvana.webp";
import Ray from "../assets/img/posters/ray.webp";
import Sinatra from "../assets/img/posters/Sinatra.webp";
import Beatles from "../assets/img/posters/beatles.webp";
import Furtuna from "../assets/img/concurenti/portrait_teodor_furtuna.webp";
import Dinut from "../assets/img/concurenti/portrait_cosmin_dinut.webp";
import Beyonce from "../assets/img/posters/beyonce.webp";
const Home = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <>
      <Header />
      <div>
        <Parallax ref={parallax} pages={8}>
          <ParallaxLayer
            offset={0}
            factor={8}
            speed={0}
            style={{
              backgroundColor: "#000000",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full object-cover object-left scale-x-[1] mx-auto"></div>
            <div className="w-full h-screen absolute top-0 left-0">
              <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                <h1 className="sm:text-5xl text-4xl text-gray-300 font-bold">
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
            <div className="flex justify-between m-4">
              <img
                alt="ray charles"
                src={Ray}
                className="transform -rotate-4 md:w-[17%] w-[40%]"
              />
              <img
                alt="baiat 50s"
                src={Furtuna}
                className="transform md:w-[17%] w-[40%]"
              />
            </div>
            <div className=" flex justify-between m-4 mt-40 md:mt-20">
              <img
                alt="fata 50s"
                src={Dinut}
                className="transform md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Sinatra}
                className=" -rotate-2  md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.4} factor={1.1} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] h-[70%] w-[100%] bg-white/20"></div>
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
            <div className="flex justify-between m-4 ">
              <img
                alt="ray charles"
                src={Ray}
                className="transform -rotate-4 md:w-[17%] w-[40%]"
              />
              <img
                alt="baiat 50s"
                src={Furtuna}
                className="transform md:w-[17%] w-[40%]"
              />
            </div>
            <div className=" flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="fata 50s"
                src={Dinut}
                className="transform md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Sinatra}
                className=" -rotate-2  md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} factor={1.1} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] h-[70%] w-[100%] bg-white/20"></div>
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
            <div className="flex justify-between m-4">
              <img
                alt="ray charles"
                src={Ray}
                className="transform -rotate-4 md:w-[17%] w-[40%]"
              />
              <img
                alt="baiat 50s"
                src={Furtuna}
                className="transform md:w-[17%] w-[40%]"
              />
            </div>
            <div className=" flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="fata 50s"
                src={Dinut}
                className="transform md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Sinatra}
                className=" -rotate-2  md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.4} factor={1.1} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] h-[70%] w-[100%] bg-white/20"></div>
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
            <div className="flex justify-between m-4">
              <img
                alt="ray charles"
                src={Ray}
                className="transform -rotate-4 md:w-[17%] w-[40%]"
              />
              <img
                alt="baiat 50s"
                src={Furtuna}
                className="transform md:w-[17%] w-[40%]"
              />
            </div>
            <div className=" flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="fata 50s"
                src={Dinut}
                className="transform md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Sinatra}
                className=" -rotate-2  md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.4} factor={1.1} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] h-[70%] w-[100%] bg-white/20"></div>
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
            <div className="flex justify-between m-4">
              <img
                alt="ray charles"
                src={Ray}
                className="transform -rotate-4 md:w-[17%] w-[40%]"
              />
              <img
                alt="baiat 50s"
                src={Furtuna}
                className="transform md:w-[17%] w-[40%]"
              />
            </div>
            <div className=" flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="fata 50s"
                src={Dinut}
                className="transform md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Sinatra}
                className=" -rotate-2  md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5.4} factor={1.1} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] h-[70%] w-[100%] bg-white/20"></div>
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
            <div className="flex justify-between m-4">
              <img
                alt="ray charles"
                src={Ray}
                className="transform -rotate-4 md:w-[17%] w-[40%]"
              />
              <img
                alt="baiat 50s"
                src={Furtuna}
                className="transform md:w-[17%] w-[40%]"
              />
            </div>
            <div className=" flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="fata 50s"
                src={Dinut}
                className="transform md:w-[17%] w-[40%]"
              />
              <img
                alt="Sintra"
                src={Sinatra}
                className=" -rotate-2  md:w-[17%] w-[40%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={6.4} factor={1.1} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] h-[70%] w-[100%] bg-white/20"></div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Home;
