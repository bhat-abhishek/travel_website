import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  // const URL = process.env.URL
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const __DEV__ = document.domain;
  let __URL__;
  if (__DEV__ === "localhost") {
    __URL__ = "http://localhost:3000";
  } else {
    __URL__ = "https://madhuhomestaysirsi.com";
  }
  const navigate = useNavigate();

  
  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch(`${__URL__}/api/user/register`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        contact,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("User successfully registered");
      navigate("/login");
  } else {
      alert("error");
      navigate("/");
    }
  }

  return (
    <div className="bg-orange-100 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={registerUser}
          className="bg-green-100 px-6 py-8 rounded-lg shadow-2xl text-black w-full"
        >
          <h1 className="mb-8 text-3xl text-green-600 text-center text- font-bold">
            Sign up
          </h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullName"
            placeholder="Full Name"
            onChange={(e) => setfullName(e.target.value)}
            required
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="tel"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="Phone number"
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-yellow-800 focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{" "}
            <li
              className="underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </li>{" "}
            and{" "}
            <li
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </li>
          </div>
        </form>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
