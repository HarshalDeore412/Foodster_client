import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  let navigate = useNavigate();
  const url =  `${baseUrl}/api/user/login-user`;

  const [details, setDetails] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    });

    const json = await response.json();

    console.log(json);

    if (json.success) {
      toast.success(json.message);
      localStorage.setItem("userEmail", json.data.email);
      localStorage.setItem("userName", json.data.name);
      console.log(localStorage.getItem("userName"));
      localStorage.setItem("authToken", json.token);
      console.log("auth token : ", localStorage.getItem("authToken"));
      navigate("/");
    } else {
      toast.error(json.message);
    }
  };

  const onchange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="h-screen w-full ">
        <div className="h-full  flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="relative">
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
            <div
              id="form-container"
              className="bg-white p-16 rounded-lg shadow-2xl w-[350px] relative z-10 transform transition duration-500 ease-in-out"
            >
              <h2
                id="form-title"
                className="text-center text-3xl font-bold mb-10 text-gray-800"
              >
                Login
              </h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={details.email}
                  onChange={onchange}
                  required
                />
                <input
                  className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={details.password}
                  onChange={onchange}
                  required
                />
                <div className=" flex justify-center w-full ">
                  <Button text={"Sign in"} />
                </div>

                <a
                  className="text-blue-500  hover:text-blue-800 text-sm"
                  href=""
                >
                  Forgot Password?
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
