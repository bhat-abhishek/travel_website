import { React, useEffect, useContext } from "react";
import UsersCard from "../../components/Dashboard/UsersCard";
import useFetch from "../../hooks/useFetch";
import { sideBarContext } from "../../context/sideBarContext";
const Users = () => {
  const __domain__ = document.domain;
  let __URL__;
  if (__domain__ === "localhost") __URL__ = "http://localhost:1337";
  else __URL__ = "https://madhuhomestaysirsi.com";

  const sideBar = useContext(sideBarContext);
  useEffect(() => {
    if(sideBar.showMenu) sideBar.toggleMenu();
  }, []);
  const { data, loading, err, reFetch } = useFetch(
    `${__URL__}/api/admin/users`
  );
  
  return (
    <div className="flex justify-center items-center w-full bg-gray-50 shadow-xl rounded-md flex-wrap p-5 space-y-5">
      <div className="w-full flex justify-between">
        <h3 className="text-2xl">Users</h3>
        <span>Fast 10 days</span>
      </div>
      <div className="w-full space-y-5">
        <ul className="flex text-xl justify-between items-center">
          <li>User</li>
          <li>
            Room Type<span>(rooms)</span>
          </li>
          <li>Date</li>
        </ul>

        { loading || data.length == 0 ? (
          <div className="flex justify-center items-center h-screen">
            Loading
          </div>
        ) :  (
        data.map((item,index)=>{
          console.log(item.fullName)
          return(
            <UsersCard fullName={item.fullName} key={index} email={item.email} />
          )
        })
          // data.map((item, index) => {
          //   return (
          //     <UsersCard
          //       key={index}
          //       fullName={item.fullName}
          //       email={item.email}
          //       contact={item.contact}
          //     />
          //   );
          // })
        )}
        <UsersCard email={"abhishekbhat.dev@gmail.com"} fullName={"Abhishek Bhat"}/>
      </div>
    </div>
  );
};

export default Users;
