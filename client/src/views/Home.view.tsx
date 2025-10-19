import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

//media
import Header from "./components/General/Header";
import Afro from "../assets/img/posters/Afro.jpg";
import America from "../assets/img/posters/America.jpg";
import Arabic from "../assets/img/posters/Arabic.jpg";
import Balkanic from "../assets/img/posters/Balkanic.jpg";
import Bollywood from "../assets/img/posters/Bollywood.jpg";
import Latino from "../assets/img/posters/Latino.jpg";
import Background from "../assets/img/Background/landing-page-bg.jpg";
import GirlAfro from "../assets/img/concurenti/Afro-Grosu.jpg";
import BoyAfro from "../assets/img/concurenti/Afro-Nae.jpg";
import GirlAmerica from "../assets/img/concurenti/America-Dascalescu.jpg";
import BoyAmerica from "../assets/img/concurenti/America-Ignatovici.jpg";
import GirlArabian from "../assets/img/concurenti/Arabian-Milcu.jpg";
import BoyArabian from "../assets/img/concurenti/Arabian-Mamut.jpg";
import GirlBalkanic from "../assets/img/concurenti/Balkanic-Mocanu.jpg";
import BoyBalkanic from "../assets/img/concurenti/Balkanic-Nițescu.jpg"
import GirlBw from "../assets/img/concurenti/Bollywood-Bodor.jpg"
import BoyBw from "../assets/img/concurenti/Bollywoood-Lucaci.jpg"
import GirlLatino from "../assets/img/concurenti/Latino-Filip.jpg"
import BoyLatino from "../assets/img/concurenti/Latino-Tudoriu.jpg"
import RightAfro from "../assets/img/items/afro/RightAfro.jpg";
import LeftAfro from "../assets/img/items/afro/LeftAfro.jpg";
import RightAmerica from "../assets/img/items/american/RightAmerica.jpg";
import LeftAmerica from "../assets/img/items/american/LeftAmerica.jpg";
import RightArabic from "../assets/img/items/arabian/RightArabia.jpg";
import LeftArabic from "../assets/img/items/arabian/LeftArabia.jpg";
import RightBalkanic from "../assets/img/items/balkanic/RightBalkanic.jpg";
import LeftBalkanic from "../assets/img/items/balkanic/LeftBalkanic.jpg";
import RightLatino from "../assets/img/items/latino/RightLatino.jpg";
import LeftLatino from "../assets/img/items/latino/LeftLatino.webp";
import RightBw from "../assets/img/items/bollywood/RightBw.webp";
import LeftBw from "../assets/img/items/bollywood/LeftBw.jpg";

//componente
import "intersection-observer";
import Singer from "./components/General/Singer.component";
import Pachete from "./components/General/Pachete.component";
import Description from "./components/General/Description.component";
import Locatie from "./components/General/Locatie.component";
import MasterCeremonies from "./components/General/MasterCeremonies.component";
import Gallery from "./components/General/Gallery.component";
import Footer from "./components/General/Footer.component";
import Sponsori from "./components/General/Sponsori.component";

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
                <h1 className="sm:text-5xl text-4xl text-gray-300 font-bold bg-black/70 p-10 rounded-full">
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
          backgroundImage: `url(${Afro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",  // This ensures the image focuses on the bottom-center
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
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="fata afro"
                src={GirlAfro}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />

              <img
                alt="baiat afro"
                src={BoyAfro}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="Left Afro"
                src={LeftAfro}
                className="transform -rotate-6 md:w-[17%] w-[40%] scale-[85%]"
              />
              <img
                alt="Right Afro"
                src={RightAfro}
                className=" rotate-6  md:w-[17%] w-[40%] scale-[85%]"
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
              backgroundImage: `url(${America})`,
              backgroundSize: "cover",
              backgroundPosition: "center 65%",
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
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="fata america"
                src={GirlAmerica}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />

              <img
                alt="baiat america"
                src={BoyAmerica}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="ray charles"
                src={LeftAmerica}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
              <img
                alt="Sintra"
                src={RightAmerica}
                className="  md:w-[17%] w-[40%] rotate-6 scale-[85%]"
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
              backgroundImage: `url(${Arabic})`,
              backgroundSize: "cover",
              backgroundPosition: "center 60%",
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
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="baiat arabia"
                src={BoyArabian}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
              <img
                alt="fata arabia"
                src={GirlArabian}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="LeftArabian"
                src={LeftArabic}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
              <img
                alt="RightArabian"
                src={RightArabic}
                className="  md:w-[17%] w-[40%] rotate-6 scale-[85%]"
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
              backgroundImage: `url(${Balkanic})`,
              backgroundSize: "cover",
              backgroundPosition: "center 35%",
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
            <div className="hidden md:flex justify-between mt-40 md:mt-20">
              <img
                alt="fata balkanic"
                src={GirlBalkanic}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
              <img
                alt="baiat balkanic"
                src={BoyBalkanic}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between  mt-40 md:mt-20 ">
              <img
                alt="Left Balkanic"
                src={LeftBalkanic}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
              <img
                alt="Right Balkanic"
                src={RightBalkanic}
                className=" rotate-6  md:w-[17%] w-[40%] scale-[85%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Sponsori />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${Bollywood})`,
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
            <div className="hidden md:flex justify-between mt-40 md:mt-20">
              <img
                alt="fata Bollywood"
                src={GirlBw}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />

              <img
                alt="baiat Bollywood"
                src={BoyBw}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between  mt-40 md:mt-20 ">
              <img
                alt="Left Bw"
                src={LeftBw}
                className="transform -rotate-6 md:w-[17%] w-[40%] scale-[85%]"
              />
              <img
                alt="Right Bw"
                src={RightBw}
                className=" md:w-[17%] w-[40%] rotate-6 scale-[85%]"
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
              backgroundImage: `url(${Latino})`,
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
            <div className="hidden md:flex justify-between mt-40 md:mt-20">
              <img
                alt="fata latino"
                src={GirlLatino}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />

              <img
                alt="baiat latino"
                src={BoyLatino}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="left latino"
                src={LeftLatino}
                className="transform -rotate-6 md:w-[17%] w-[40%] scale-[85%]"
              />
              <img
                alt="right latino"
                src={RightLatino}
                className=" rotate-6 md:w-[17%] w-[40%] scale-[85%]"
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
