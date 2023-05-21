import React from "react";
import BookingCard from "../../components/Dashboard/BookingCard";
import useFetch from "../../hooks/useFetch";

const RecentBooking = () => {
  const __domain__ = document.domain ;
  let __URL__;
  if(__domain__ === "localhost" || __domain__ === "127.0.0.1"){
    __URL__ = "http://localhost:1337";
  }else{
    __URL__ = "https://madhuhomestaysirsi.com";
  }
 
  const { data, loading, err, reFetch } = useFetch(`${__URL__}/api/admin/bookings`);
 
  return (
    <div className="flex justify-between items-center w-full bg-gray-50 shadow-xl rounded-md flex-wrap p-5 space-y-5">
      <div className="w-full flex justify-between flex-wrap">
        <h3 className="text-2xl">Recent Bookings</h3>
        <span>Fast 10 days</span>
      </div>
      <div className="w-full space-y-5 flex flex-col">
        <div className="flex flex-col lg:flex-row text-xl justify-between flex-wrap">
          <span>Booked By</span>
          <span>Room</span>
          <span>Date</span>
        </div>
        {loading || data.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            Loading
          </div>
        ) : (
          data.map((item, index) => {
            return (
              <BookingCard
                key={index}
                checkIn={item.checkIn.substring(0, 10).split("-").reverse().join("-")}
                checkOut={item.checkOut.substring(0, 10).split("-").reverse().join("-")}
                roomDetails={item.roomDetails}
                name={item["userId"]["fullName"]}
                email={item["userId"]["email"]}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default RecentBooking;
