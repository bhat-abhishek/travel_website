import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const Home2 = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Navbar2 />
        <div>
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home2;
