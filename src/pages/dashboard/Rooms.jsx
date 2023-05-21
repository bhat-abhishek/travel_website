import React,{useContext, useEffect,useState} from "react";
import RoomCard from "../../components/Dashboard/RoomCard";
import { sideBarContext } from "../../context/sideBarContext";

const Rooms = () => {
  const __domain__ = document.domain
  let __URL__
  if (__domain__ == "localhost") __URL__ = "http://localhost:1337"

  const sideBar = useContext(sideBarContext);
  useEffect(() => {
    sideBar.toggleMenu();
  }, []);
  const inputs = {
    roomType: "",
    currentPrice: "",
  }
  const [input,setInput] = useState(inputs)
  const handleChange = (e)=>{
    setInput(prev => ({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const res = await fetch(`${__URL__}/api/admin/rooms`,{
        method:"PUT",
        headers:{
          'Content-Type':"application/json"
        },
        body : JSON.stringify(input)
      })
      const data = await res.json()
      if(data.status === "success") {
        alert('Room values updated')
      }
      else{
        alert(`${data.message}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-white px-5 flex-1">
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <form className="w-full space-y-5 lg:space-y-10 py-8 flex flex-col flex-wrap justify-center items-center" onSubmit={handleSubmit}>
        <h2 className="w-full mx-auto lg:text-center text-2xl"
        >Edit Room Values</h2>
        <div className="flex flex-wrap w-full justify-start lg:justify-between items-center space-y-5 lg:space-y-0">
          <div>
            <label htmlFor="roomType">Choose a Room:</label>
            <select name="roomType" id="roomTypes" className="border-none px-3" onChange={handleChange}>
              <option value="Non A/C Room">Non A/C Room</option>
              <option value="A/C Room">A/C Room</option>
              <option value="Dormitory Room">Dormitory Room</option>
            </select>
          </div>
          <div>
            <label htmlFor="currentPrice">Enter a amount:</label>
            <input
              name="currentPrice"
              type="text"
              placeholder="Amout"
              className="border-none outline-0 focus placeholder:px-5"
              onChange={handleChange}
            />
          </div>
          
        </div>
        <button type="submit" className="bg-gray-800 text-white px-5 py-2 rounded-lg mt-5">
          Update
        </button>
      </form>
    </div>
  );
};

export default Rooms;
