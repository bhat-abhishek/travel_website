import React from "react";
import { Link } from "react-router-dom";

const DrawerComponent = ({ label, Icon }) => {
  return (
    <>
      <li>
        <Link
          to={(label==="Home")?"/":label === "Dashboard" ? "/dashboard" : `/dashboard/${label}`}
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Icon />
          <span className="ml-3">{label}</span>
        </Link>
      </li>
    </>
  );
};

export default DrawerComponent;
