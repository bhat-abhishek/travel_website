import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckOutComponent from "./CheckOutComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CheckOutContext } from "../../context/amountContext";
import { authContext } from "../../context/authContext";
import acRoom from "../../assets/gallery/Ac room.jpg";
import dormitory from '../../assets/gallery/Dormitory.jpg'
import nonAcRoom from "../../assets/gallery/non Ac.jpg";
import yana from '../../assets/yana.jpg'
import gokarnaImg from '../../assets/gokarna.jpg'
import magodImg from '../../assets/magod.jpg'

const gokarna = `Gokarna is a small temple town located in the Uttara Kannada district of Karnataka state in southern India,[1] It has a population of around 20,000. Shiva the most worshipped deity in the town, and to whom its main temple, also known as Mahabaleshwara, is dedicated. At this temple is housed what is believed by some to be the earliest Shiva Linga (Atmalinga).

Gokarna is known as one of seven important centers of pilgrimage in Hinduism. It lies on what was once unspoiled coastline at the estuary`

const murdeshwara = `The origin of the name "Murdeshwar" dates to the time of Ramayana. The Hindu gods attained immortality and invincibility by worshiping a divine Linga called the Atma-Linga. The Lanka King Ravana wanted to attain immortality by obtaining the Atma-Linga (Soul of Shiva). Since the Atma-Linga belonged to Shiva, Ravana worshipped Shiva with devotion. Pleased by his prayers, Shiva appeared before him and asked him what he wanted. Ravana asked for the Atma-Linga.`

const Checkout = () => {

  const __domain__ = document.domain;
  let __URL__;
  if (__domain__ === "localhost") {
    __URL__ = "http://localhost:3000";
  } else {
    __URL__ = "https://madhuhomestaysirsi.com";
  }
  const navigate = useNavigate();
  const { decodedToken, isMyTokenExpired } = useContext(authContext);

  useEffect(() => {
    if (decodedToken === null || isMyTokenExpired) {
      navigate("/login");
    }
  }, [isMyTokenExpired, decodedToken]);

  //Function to calculate days between two dates
  function dayCount(startDate, endDate) {
    const milliseconds1 = startDate.getTime();
    const milliseconds2 = endDate.getTime();
    const differenceMs = milliseconds2 - milliseconds1;
    return Math.round(differenceMs / 1000 / 60 / 60 / 24);
  }

  const { roomState, amount, checkIn, setCheckIn, checkOut, setCheckOut } =
    useContext(CheckOutContext);

  const roomDetails = roomState.filter((ele) => {
    return ele["roomsBooked"] > 0
      ? { roomType: ele["roomType"], roomsBooked: ele["roomsBooked"] }
      : null;
  });

  const days = dayCount(checkIn, checkOut);
  async function displayRazorpay() {
    const response = await fetch(`${__URL__}/api/payment/booking`, {
      method: "POST",
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });
    const resData = await response.json(); //Data from server for payment

    const options = {
      key: "rzp_test_awwzQ7uQCXxYih", 
      amount: resData.amount.toString(),
      currency: resData.currency,
      name: "Travel Website",
      description:
        "Thank you for booking, your place will be booked after the payment",
      order_id: resData.id,
      handler: async function (response) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razropayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          roomDetails: roomDetails,
          checkIn: checkIn,
          checkOut: checkOut,
        };
        const verify = await fetch(`${__URL__}/api/payment/verification`, {
          method: "POST",
          headers: {
            "x-access-token": localStorage.getItem("token"),
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const res = await verify.json();
        if (res.status === "ok") {
          alert(
            "Payment Successful, booking details available in your profile"
          );
          navigate("/");
        } else {
          alert("payment failed");
        }
      },

      //Prefill for Payment form
      prefill: {
        name: "Abhishek Bhat",
        email: "abhi@gmail.com",
        phone_number: "9113021966",
      },
    };

    //Creating razorpay window
    const razorPay = new window.Razorpay(options);
    razorPay.open();
  }

  return (
    <>
      <div
        className="w-full mt-24 mx-auto h-full bg-black bg-opacity-90 top-0  sticky-0"
        id="chec-div"
      >
        <div
          className="w-full absolute  h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div
              className=" w-full  pl-4 pr-10 md:pr-4  py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
              id="scroll"
            >
              <div
                className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                // onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p className="text-sm pl-2 leading-none">
                  {" "}
                  <Link to="/">Back</Link>
                </p>
              </div>
              <p className="md:text-5xl text-3xl font-black leading-10 text-gray-800 pt-4">
                Select Your Place
              </p>

              <div className="my-2 p-1 md:flex mt-10 rounded">
                <p className="  text-black pl-2 mt-2 w-48">Check in:</p>
                <DatePicker
                  selected={checkIn}
                  onChange={(date) => setCheckIn(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="To"
                  className="bg-grey-100 text-black border-black rounded-xl "
                />
                <p className="  text-black pl-2 mt-2 w-48">Check out:</p>
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="To"
                  className="bg-grey-100 text-black border-black rounded-xl "
                />
              </div>
              <CheckOutComponent
                amount={9000}
                roomType="Non A/C Room"
                place="Yana"
                rmImg={yana}
                meal={murdeshwara}

              />
              <CheckOutComponent
                amount={9000}
                roomType="A/C Room"
                place="Gokarna"
                rmImg={gokarnaImg}
                meal={gokarna}
              />
              
            </div>

            <div className=" md:w-1/2  w-full bg-gray-100 h-full">
              <div className="flex flex-col md:h-screen px-14 py-20  overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800 pb-16">
                    Summary
                  </p>
                  {roomDetails.map((room) => {
                    return (
                      <div className="flex items-center justify-between my-5">
                        {/* <p className="text-base leading-none text-gray-800">
                          {room.place}
                        </p> */}
                        <p className="text-base leading-none text-gray-800">
                          {room.roomsBooked}
                        </p>
                      </div>
                    );
                  })}
                  <div className="flex items-center justify-between">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      {amount}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Days</p>
                    <p className="text-base leading-none text-gray-800">
                      {days}
                    </p>
                  </div>
                  
                </div>
                <div>
                  <div className="flex  items-center pb-6 justify-between md:mt-10  pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      {amount * days}
                    </p>
                  </div>
                  <button
                    onClick={displayRazorpay}
                    className={
                      `text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white` 
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={amount*days>0?false:true}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
