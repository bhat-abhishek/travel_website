import React from "react";
import { decodeToken } from "react-jwt";
import { Link } from "react-router-dom";

const ProfileDetails = ({ name = "", email = "", contact = "" }) => {
  const token = localStorage.getItem("token");
  const decodedToken = decodeToken(token);
  return (
    <div className=" bg-white flex flex-1 flex-col justify-around p-5 rounded-md shadow-md">
      <div className="flex justify-between py-2 border-b-[1px]">
        Name<span>{name}</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        Contact<span>{contact}</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        email<span>{email}</span>
      </div>
      {decodedToken.isAdmin === true && (
        <div className="flex justify-between py-2 border-b-[1px]">
          <Link to="/dashboard">Admin Panel</Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
