import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate} from "react-router-dom";
import { CheckOutContext } from "../../context/amountContext";

const BookingForm = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut } = React.useContext(CheckOutContext);
  const navigate = useNavigate();
  const checkLogin = ( ) => {
    if (!localStorage.getItem("token")) {
      alert('Please login/signup to book a room') 
    }
    else{
      navigate('/checkout');
    }
  }

  return (
    <div className="flex-column lg:z-10 w-[40%] lg:w-[50%] lg:-mt-56  mx-auto flex justify-center items-center">
      <div
        className="text-sm  mx-auto my-auto w-24 visible lg:invisible lg:p-2 backdrop-blur-xl focus:outline-none flex justify-center items-center rounded font-bold cursor-pointer  hover:bg-teal-700 hover:text-teal-100  
        text-white 
        border duration-200 ease-in-out 
        border-teal-600 transition"
        onClick={checkLogin}
      >
        Book Now
      </div>
      <div className=" border hidden lg:backdrop-blur-xl  w-full mx-auto  md:-mt-36 md:bg-transparent rounded-2xl lg:-mt-10 lg:flex flex-col items-center">
        <div>
          <div className="my-2 lg:p-1  flex rounded">
            <h1 className="text-2xl md:text-4xl text-center mx-auto font-Rubik text-white">
              Check Places Availability
            </h1>
          </div>
        </div>
        <div className="relative flex lg:mx-10 justify-between items-center">
          <div className="flex flex-col md:flex-row justify-center items-center pt-6">
            <div className="my-2 p-1 bg-transparent flex  rounded">
              <p className="p-2 lg:ml-4 text-white">From:</p>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To"
                className="bg-transparent text-white border-white rounded-xl "
              />
            </div>
            <div className="my-2 p-1 bg-transparent flex  rounded">
              <p className="p-2 lg:ml-4 text-white">To: </p>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To"
                className="bg-transparent text-white border-white rounded-xl "
              />
            </div>
          </div>
        </div>
        <div
          className="text-sm my-2 mx-auto w-24 lg:p-2 focus:outline-none flex justify-center items-center rounded font-bold cursor-pointer  hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100  
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
        onClick={checkLogin}
        >
          GO
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
