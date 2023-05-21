import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { authContext } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setDecodedToken } = useContext(authContext);
  const navigate = useNavigate();
  async function loginUser(event) {
    event.preventDefault();
    const __DEV__ = document.domain;
    let __URL__;
    console.log(URL);
    if (__DEV__ === "localhost" || __DEV__ === "127.0.0.1") {
      __URL__= "http://localhost:3000";
    } else {
      __URL__ = "https://madhuhomestaysirsi.com";
    }
    const response = await fetch(`${__URL__}/api/user/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      localStorage.setItem("token", data.token);
      setDecodedToken(data.token);
      alert("Login successful");
      navigate("/");
    } else {
      alert("Please check your username and password or Invalid Credential");
    }
  }

  return (
    <div className="bg-orange-100 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-green-100 px-6 py-8 rounded-lg shadow-2xl text-black w-full"
          onSubmit={loginUser}
        >
          <h1 className="mb-8 text-3xl text-green-600 text-center text- font-bold">
            Login
          </h1>
          <p className="text-sm text-green-500 mb-2 ml-2">Email </p>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-sm text-green-500 mb-2 ml-2">Password </p>
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-yellow-800 focus:outline-none my-1"
          >
            Login
          </button>
          <p class="text-center pt-5 mb-4">Forgot password</p>
        </form>

        <div className="text-grey-dark mt-6">
          Don't have account yet? <Link to="/Signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
