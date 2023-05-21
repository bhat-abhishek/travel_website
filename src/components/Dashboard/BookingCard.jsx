import React from "react";

const BookingCard = ({
  checkIn,
  checkOut,
  roomDetails = [],
  name = "",
  email = "",
}) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between border-b-[2px] flex-wrap space-y-5 lg:space-y-0">
        
        <div className="flex flex-col flex-wrap">
          <span>{name}</span>
          <span>{email}</span>
        </div>

        <div>
          {roomDetails.map((item,index) => {
            return (
              <div className="space-x-2" key={index}>
                <span>{item.roomType}</span>
                <span>{item.roomsBooked}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap flex-col">
          {checkIn}
          <span className="px-3">to</span>
          {checkOut}
        </div>

      </div>
    </div>
  );
};

export default BookingCard;
