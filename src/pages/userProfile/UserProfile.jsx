import React from "react";
import BookingCard from "./BookingCard";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import useFetch from "../../hooks/useFetch";
import { decodeToken } from "react-jwt";

const UserProfile = () => {
  const token = localStorage.getItem("token")
  const decodedToken = decodeToken(token);
  const __domain__ = document.domain;
  let __URL__ ;
  if(__domain__ === "localhost") __URL__ = "http://localhost:3000"
  else __URL__ = "https://madhuhomestaysirsi.com"
  const { data, loading } = useFetch(
    `${__URL__}/api/user/${decodedToken.userId}`
  );
  const { user, booking } = data;

  return loading || data.length === 0 ? (
    <div className="flex justify-center items-center h-screen">Loading</div>
  ) : (
    <div className="mt-24 w-full md:w-[80vw] p-5 mx-auto flex space-y-5 flex-wrap bg-blue-100">
      <div className="w-full flex flex-col lg:flex-row flex-wrap space-x-0 space-y-5 lg:space-x-5 ">
        <ProfileCard name={user.fullName} email={user.email} width="w-96" />
        <ProfileDetails
          name={user.fullName}
          email={user.email}
          contact={user.contact}
        />
      </div>
      <div className="w-full  bg-white shadow-lg rounded-lg p-5 space-y-3">
        <h2 className="text-center text-2xl">Booking Details </h2>
        <div>
          {booking.map((item, index) => {
            return (
              <BookingCard
                checkIn={item.checkIn.substring(0, 10).split("-").reverse().join("-")}
                checkOut={item.checkOut.substring(0, 10).split("-").reverse().join("-")}
                roomDetails={item.roomDetails}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
