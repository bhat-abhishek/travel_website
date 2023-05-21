import React from "react";


const BookingCard = ({
  checkIn = "",
  checkOut = "",
  roomDetails = [],
  amount = "",
}) => {
  return (
    <div className=" bg-white flex flex-1 flex-col justify-around p-5 rounded-md shadow-md">
      <div className="flex justify-between py-2 border-b-[1px]">
        Check-In<span>{checkIn}</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        Check-Out<span>{checkOut}</span>
      </div>

      {roomDetails.map((ele,index) => {
        return (
          <div className="flex justify-between py-2 border-b-[1px]">
            {ele['roomType']}<span>{ele['roomsBooked']}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BookingCard;
