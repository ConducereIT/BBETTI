import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { ReactNebula } from "@flodlc/nebula";
import Header from "./components/General/Header";
import Elvis from "../assets/img/elvis.jpg";
import Beatles from "../assets/img/beatles.jpg";
import Carousel from "./components/General/Carousel.component";
import Jackson from "../assets/img/jackson.jpg";
import Abba from "../assets/img/abba.jpg";
import Nirvana from "../assets/img/nirvana.jpg";
export default function App() {
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
              backgroundImage: `url(${Elvis})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full object-cover object-left scale-x-[1] mx-auto">
              <ReactNebula
                config={{
                  starsCount: 1000,
                  starsColor: "#FFFFFF",
                  starsRotationSpeed: 5,
                  cometFrequence: 100,
                  nebulasIntensity: 0,
                  bgColor: "rgb(8,8,8)",
                  sunScale: 0,
                  planetsScale: 0,
                  solarSystemOrbite: 70,
                  solarSystemSpeedOrbit: 100,
                }}
              />
            </div>
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
            factor={1}
            speed={1}
            style={{
              backgroundImage: `url(${Elvis})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50">
              <div className="w-full h-screen absolute top-0 left-0">
                <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                  <h1 className="sm:text-5xl text-4xl text-gray-300 font-bold">
                    Componenta
                  </h1>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.99} factor={1} speed={1}>
            <Carousel />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            factor={1}
            speed={2}
            style={{
              backgroundImage: `url(${Beatles})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50">
              <div className="w-full h-screen absolute top-0 left-0">
                <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                  <h1 className="sm:text-5xl text-4xl text-gray-300 font-bold">
                    Componenta
                  </h1>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.99} factor={1} speed={1}>
            <Carousel />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={1}
            speed={2}
            style={{
              backgroundImage: `url(${Abba})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50">
              <div className="w-full h-screen absolute top-0 left-0">
                <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                  <h1 className="sm:text-5xl text-4xl text-gray-300 font-bold">
                    Componenta
                  </h1>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.99} factor={1} speed={1}>
            <Carousel />
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            factor={1}
            speed={2}
            style={{
              backgroundImage: `url(${Jackson})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50">
              <div className="w-full h-screen absolute top-0 left-0">
                <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                  <h1 className="sm:text-5xl text-4xl text-gray-300 font-bold">
                    Componenta
                  </h1>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.99} factor={1} speed={1}>
            <Carousel />
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            factor={1}
            speed={2}
            style={{
              backgroundImage: `url(${Nirvana})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50">
              <div className="w-full h-screen absolute top-0 left-0">
                <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                  <h1 className="sm:text-5xl text-4xl text-gray-300 font-bold">
                    Componenta
                  </h1>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5.99} factor={1} speed={1}>
            <Carousel />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
