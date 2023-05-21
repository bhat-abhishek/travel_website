import { React, useContext, useState } from "react";
import roomImg from "../assets/room1.jpg";
import { CheckOutContext } from "../context/amountContext";

const CheckOutComponent = ({ width = "w-1/4", roomType, capacity }) => {
  const { setAmount, amount, roomState, dispatch } =
    useContext(CheckOutContext);
  const [roomCounts, setroomCounts] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const room = roomState.filter((ele) => {
    return ele["roomType"] === roomType ? ele["roomCost"] : null;
  });
  const roomCost = room[0]["roomCost"];

  const addRoom = (e) => {
    e.preventDefault();
    setroomCounts(roomCounts + 1);
    dispatch({
      type: "ADD_ROOM",
      room: {
        roomType: roomType,
        count: roomCounts,
        
      },
    });
    setAmount(amount + roomCost);
  };

  const removeRoom = (e) => {
    e.preventDefault();
    if (roomCounts === 0) return;
    setroomCounts(roomCounts - 1);
    dispatch({
      type: "REMOVE_ROOM",
      room: {
        roomType: roomType,
        count: roomCounts,
      },
    });
    setAmount(amount - roomCost);
  };

 

  
  return (
    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200 lg:space-x-5 space-y-5">
      <div>
        <img
          src={roomImg}
          alt="..."
          className="w-full h-full rounded-sm shadow-2xl object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4 md:flex md:flex-col md:justify-between space-y-5">
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-3xl font-black leading-none text-red-900">
            {roomType}
          </p>
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">
          Capacity:{capacity}
        </p>
        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
        <p className="w-96 text-xs leading-3 text-gray-600">
          Composition: 100% calf leather
        </p>
        <p className="text-3xl font-black leading-none text-gray-800 w-full">
          {roomCost}
        </p>
        <p>Enter no of People</p>
        <div className="flex text-2xl space-x-10 justify-between">
          <button
            className="w-20 border-blue-500 border rounded-md"
            onClick={removeRoom}
          >
            -
          </button>
          <p>{roomCounts}</p>
          <button
            className="w-20 border-blue-500 border rounded-md"
            onClick={addRoom}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutComponent;
