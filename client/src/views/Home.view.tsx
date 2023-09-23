
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Header from "./components/General/Header";
import Elvis from "../assets/img/elvis.webp";
import Carousel from "./components/General/Carousel.component";
import Jackson from "../assets/img/jackson.webp";
import Abba from "../assets/img/abba.webp";
import Nirvana from "../assets/img/nirvana.webp";
import Ray from "../assets/img/ray.webp";
import Sinatra from "../assets/img/Sinatra.webp";
import Beatles from "../assets/img/beatles.webp";
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
            factor={0.25}
            speed={0.5}
            style={{
              backgroundImage: `url(${Elvis})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.4}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="flex justify-end">
              <img
                alt="ray charles"
                src={Ray}
                style={{ width: "20%", marginRight: "5%" }}
                className="-rotate-2"
              />
            </div>
            <div className=" flex justify-start">
              <img
                alt="Sintra"
                src={Sinatra}
                style={{ width: "15%", marginLeft: "4%", marginTop: "5%" }}
                className=" rotate-2"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.25} factor={1.25} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[60%] h-[70%] w-[100%] bg-white/20"></div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            factor={0.25}
            speed={0.5}
            style={{
              backgroundImage: `url(${Beatles})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.4}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="flex justify-end">
              <img
                alt="ray charles"
                src={Ray}
                style={{ width: "20%", marginRight: "5%" }}
              />
            </div>
            <div className=" flex justify-start">
              <img
                alt="Sintra"
                src={Sinatra}
                style={{ width: "15%", marginLeft: "5%", marginTop: "5%" }}
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.25} factor={1.25} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[60%] h-[70%] w-[100%] bg-white/20 "></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={0.25}
            speed={0.5}
            style={{
              backgroundImage: `url(${Abba})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.4}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="flex justify-end">
              <img
                alt="ray charles"
                src={Ray}
                style={{ width: "20%", marginRight: "5%" }}
              />
            </div>
            <div className=" flex justify-start">
              <img
                alt="Sintra"
                src={Sinatra}
                style={{ width: "15%", marginLeft: "5%", marginTop: "5%" }}
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.25} factor={1.25} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            factor={0.25}
            speed={0.5}
            style={{
              backgroundImage: `url(${Jackson})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4.4}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="flex justify-end">
              <img
                alt="ray charles"
                src={Ray}
                style={{ width: "20%", marginRight: "5%" }}
              />
            </div>
            <div className=" flex justify-start">
              <img
                alt="Sintra"
                src={Sinatra}
                style={{ width: "15%", marginLeft: "5%", marginTop: "5%" }}
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.25} factor={1.25} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            factor={0.25}
            speed={0.5}
            style={{
              backgroundImage: `url(${Nirvana})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5.4}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="flex justify-end">
              <img
                alt="ray charles"
                src={Ray}
                style={{ width: "20%", marginRight: "5%" }}
              />
            </div>
            <div className=" flex justify-start">
              <img
                alt="Sintra"
                src={Sinatra}
                style={{ width: "15%", marginLeft: "5%", marginTop: "5%" }}
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5.25} factor={1.25} speed={0.5}>
            <div className=" bg-green-600/30 w-full h-full"></div>
          </ParallaxLayer>
        </Parallax>
      </div>

    </>
  );
};

export default Home;