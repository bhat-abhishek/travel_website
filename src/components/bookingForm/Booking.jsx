import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-wrap bg-green-200 mx-auto w-1/2 ">
    <div className="">
    <div>
        <input className='' type="number" placeholder='Rooms'/>
    </div>
    <div>
        <input className='' type="number" placeholder='Rooms'/>
    </div>
    <div>
        <input className='' type="number" placeholder='Rooms'/>
    </div>
    </div>
    <div className="">
    <div className="">
    <p className="p-2 ml-4 mr-4">To:</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="To"
                    withPortal
                  />
    </div>
    <div className="">
    <p className="p-2 ml-4 mr-4">To:</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="To"
                    withPortal
                  />
    </div>
    <div className="">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Go </button>
    </div>
    </div>
        
    </div>
  )
}

export default Booking