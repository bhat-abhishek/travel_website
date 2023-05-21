import React, { useContext } from "react";
import logo from "../../assets/logonav.png"
import {sideBarContext} from "../../context/sideBarContext";
import  { BsMenuButtonWide } from 'react-icons/bs';

const Menu = () => {
  const menu = useContext(sideBarContext);
  
  return (
    <>
      <div className="flex lg:hidden  justify-between w-full py-4  px-5">
        <a href="/" className="flex justify-center items-center">
          <img src={logo} alt="" className="h-28"/>
        </a>
        <button onClick={() => menu.toggleMenu()} className="flex justify-center items-center"><BsMenuButtonWide size={35} /></button>
      </div>
    </>
  );
};

export default Menu;
