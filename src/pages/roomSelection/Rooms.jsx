import React from "react";
import RoomCard from "./RoomCard";

const Rooms = () => {
  return (
    <div className="  w-full mx-auto ">
      <div className=" flex-wrap "></div>

      <div className="mx-auto md:flex-col flex-col md:flex  mt-32 ">
        <h1 className=" md:flex flex-col md:flex-row   mb-10 text-5xl text-green-500 font-Rubik justify-center text-center">
          {" "}
          Select your Room
        </h1>

        <div className="md:flex md:flex-row flex-col mx-auto ">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
        <div className="md:flex md:flex-row flex-col mx-auto ">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
        <div className="md:flex md:flex-row flex-col mx-auto ">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
