import React from "react";
import { Link } from "react-router-dom";
import user from "../../assets/User.jpg";
const UsersCard = ({
  userId = "321323",
  fullName,
  email,
  contact
}) => {
  // const __domain__ = document.domain
  // let __URL__;
  // if(__domain__ === "localhost") __URL__ = "http://localhost:1337"
  // else __URL__ = "https://madhuhomestaysirsi.com"

  
  return (
    <div>
      <ul className="flex flex-col lg:flex-row justify-between border-b-[1px] items-center">
        <li className="flex justify-start items-center w-full space-x-2 lg:space-y-0">
          <img src={user} alt="User image" className="w-10 rounded-md" />
          <Link to="/userporfile">
            <h3>{fullName}</h3>  
            <p>{email}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UsersCard;
