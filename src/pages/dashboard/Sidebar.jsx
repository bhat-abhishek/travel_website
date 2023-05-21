import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DrawerElements1 } from "../../static/DrawerElements";
import DrawerComponent from "../../components/Dashboard/DrawerComponent";
import ProfileCard from "../userProfile/ProfileCard";
import { sideBarContext } from "../../context/sideBarContext";

const Sidebar = () => {
  const sideBar = useContext(sideBarContext);
  const navigate = useNavigate();
  const closeSideBar = () => {
    sideBar.toggleMenu();
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <aside className="lg:block w-64" aria-label="Sidebar">
        <div className="overflow-y-auto h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 shadow-2xl flex flex-col justify-around">
          <ProfileCard width={"w-64"} />
          <ul className="space-y-2">
            {DrawerElements1.map((ele, i) => (
              <DrawerComponent label={ele.label} Icon={ele.Icon} key={i} />
            ))}
          </ul>
          <ul>
            <div>
              <button
                onClick={logOut}
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Logout
              </button>
              <button
                onClick={closeSideBar}
                type="button"
                class="text-white lg:hidden bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                close
              </button>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
