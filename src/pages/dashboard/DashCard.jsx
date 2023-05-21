import React from "react";

const DashCard = ({cardType,count}) => {
  return (
    <div className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 lg:space-y-3">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl">{cardType}</h2> <span>Something</span>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">{count}</h3> <span>20% increase</span>
      </div>
      <div>
        <a href="#" className="underline">See deatils</a>
      </div>
    </div>
  );
};

export default DashCard;
