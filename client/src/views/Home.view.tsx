import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { ReactNebula } from "@flodlc/nebula";
import Carousel from "./components/General/Carousel.component";
import Header from "./components/General/Header";

const Home = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <>
      <Header />
      <Parallax
        ref={parallax}
        pages={2}
        style={{
          backgroundColor: "#805E73",
          backgroundSize: "cover",
        }}
      >
        <ParallaxLayer offset={0} speed={1} factor={1}>
          <div className="w-full h-full object-cover object-left scale-x-[1] mx-auto">
            <ReactNebula
              config={{
                starsCount: 840,
                starsColor: "#FFFFFF",
                starsRotationSpeed: 0,
                cometFrequence: 80,
                nebulasIntensity: 0,
                bgColor: "rgb(8,8,8)",
                sunScale: 0,
                planetsScale: 0,
                solarSystemOrbite: 0,
                solarSystemSpeedOrbit: 0,
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
        <ParallaxLayer offset={1} speed={1}>
          <div className="w-full h-full object-cover object-left scale-x-[1] mx-auto">
            <ReactNebula
              config={{
                starsCount: 840,
                starsColor: "#FFFFFF",
                starsRotationSpeed: 0,
                cometFrequence: 80,
                nebulasIntensity: 0,
                bgColor: "rgb(8,8,8)",
                sunScale: 0,
                planetsScale: 0,
                solarSystemOrbite: 0,
                solarSystemSpeedOrbit: 0,
              }}
            />
          </div>
          <div className="w-full h-screen absolute top-0 left-0">
            <Carousel />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
