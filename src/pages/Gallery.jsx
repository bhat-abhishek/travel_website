import React from "react";
import gallery1 from "../assets/gallery/IMG20221225162315.jpg";
import gallery2 from "../assets/gallery/IMG20221230193249 (1).jpg";
import gallery3 from "../assets/gallery/IMG20221230193249.jpg";
import living_room from "../assets/gallery/living_room.jpg";
import gallery7 from "../assets/gallery/IMG20221230194707.jpg";
import cottages from "../assets/gallery/cottages.jpg";
import dormitory from "../assets/gallery/Dormitory.jpg";
import dinner from "../assets/gallery/Dining area.jpg";
import acroom from "../assets/gallery/Ac room.jpg"
import entry from '../assets/gallery/Entry.jpg'
import board from '../assets/gallery/board.jpg'
import tunga_bhadra from '../assets/gallery/tunga_bhadra.jpg'
const Gallery = () => {
  return (
    <div className="">
      <h1 className="text-grey-600 mt-28 relative  font-Rubik text-3xl text-green-600 -z-1 md:text-5xl text-center">
        Photo Gallery
      </h1>

      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap ">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery7}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery2}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery3}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={tunga_bhadra}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={acroom}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={living_room}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap ">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={dinner}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={cottages}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={dormitory}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gallery1}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={entry}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={board}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
