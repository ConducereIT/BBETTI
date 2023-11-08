import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=225&height=300"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=225&height=300"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
            </div>
          </div>
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=225&height=300"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=225&height=300"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
            </div>
          </div>
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=225&height=300"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=225&height=300"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
            </div>
          </div>
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=225&height=300"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=225&height=300"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
            </div>
            <div className="">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
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
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 1"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 2"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 3"
              />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 4"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 5"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 6"
              />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 4"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 5"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 6"
              />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 4"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 5"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 6"
              />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 4"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 5"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=450&height=600"
                alt="Image 6"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
