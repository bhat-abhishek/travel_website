import React from 'react'
import roomImg from '../../assets/room1.jpg'

const RoomCard = ({width,capacity,amount,roomType,}) => {
  return (
    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200 space-x-5">
      <div className={`w-full lg:${width}`}>
        <img
          src={roomImg}
          alt="..."
          className="w-full h-full rounded-sm shadow-2xl object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">Luxurios Night</p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">
            {roomType}
          </p>
          <p>Available Rooms:<span>17</span></p>
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">
          Capacity:{capacity}
        </p>
        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
        <p className="w-96 text-xs leading-3 text-gray-600">
          Composition: 100% calf leather
        </p>
        <div className="flex items-center justify-between pt-5 pr-6">
          <p className="text-base font-black leading-none text-gray-800 w-full text-right">
            {amount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoomCard