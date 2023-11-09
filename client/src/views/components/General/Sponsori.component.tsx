import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sponsor1 from "../../../assets/img/Sponsori/sponsori-site-bbetti-2.webp";
import Sponsor2 from "../../../assets/img/Sponsori/sponsori-site-bbetti-01.webp";
import Sponsor3 from "../../../assets/img/Sponsori/sponsori-site-bbetti--10.webp";
import Sponsor4 from "../../../assets/img/Sponsori/sponsori-site-bbetti--12.webp";
import Sponsor5 from "../../../assets/img/Sponsori/sponsori-site-bbetti--13.webp";
import Sponsor6 from "../../../assets/img/Sponsori/sponsori-site-bbetti--14.webp";
import Sponsor7 from "../../../assets/img/Sponsori/sponsori-site-bbetti--15.webp";
import Sponsor9 from "../../../assets/img/Sponsori/sponsori-site-bbetti--3.webp";
import Sponsor10 from "../../../assets/img/Sponsori/sponsori-site-bbetti--4.webp";
import Sponsor11 from "../../../assets/img/Sponsori/sponsori-site-bbetti--5.webp";
import Sponsor12 from "../../../assets/img/Sponsori/sponsori-site-bbetti--6.webp";
import Sponsor13 from "../../../assets/img/Sponsori/sponsori-site-bbetti--7.webp";
import Sponsor8 from "../../../assets/img/Sponsori/sponsori-site-bbetti--8.webp";
import Sponsor14 from "../../../assets/img/Sponsori/sponsori-site-bbetti--9.webp";
import Sponsor15 from "../../../assets/img/Sponsori/sponsori-site-bbetti--2.webp";

export default function Sponsori() {
  return (
    <>
      {/* For Mobile Phone */}
      <div className="md:hidden flex justify-center ">
        <h1 className="uppercase mt-10 text-2xl md:text-3xl font-bold whitespace-nowrap p-4 mb-6 text-white">
          Sponsori <span className=" text-color-accent">BBETTI</span>
        </h1>
      </div>
      <div className="md:hidden">
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          autoPlay
          interval={5000}
        >
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img src={Sponsor1} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor2} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor3} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor4} alt="Image 1" />
            </div>
          </div>
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img src={Sponsor5} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor6} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor7} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor8} alt="Image 1" />
            </div>
          </div>
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img src={Sponsor9} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor10} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor11} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor12} alt="Image 1" />
            </div>
          </div>
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img src={Sponsor13} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor14} alt="Image 1" />
            </div>
            <div className="">
              <img src={Sponsor15} alt="Image 1" />
            </div>
          </div>
        </Carousel>
      </div>
      {/* For Desktop */}
      <div className="hidden md:block ">
        <div className=" flex justify-center ">
          <h1 className="uppercase mt-10 text-2xl md:text-3xl font-bold whitespace-nowrap p-4 mb-6 text-white">
            Ambasadori <span className=" text-color-accent">Lanparty</span>
          </h1>
        </div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          interval={5000}
          autoPlay
        >
          {/* Slide 1 */}
          <div className=" flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor1} alt="Image 1" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor2} alt="Image 2" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor3} alt="Image 3" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor4} alt="Image 4" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor5} alt="Image 5" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor6} alt="Image 6" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor7} alt="Image 4" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor8} alt="Image 5" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor9} alt="Image 6" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor10} alt="Image 4" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor11} alt="Image 5" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor12} alt="Image 6" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor13} alt="Image 4" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor14} alt="Image 5" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor15} alt="Image 6" />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
