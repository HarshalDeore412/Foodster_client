import React, { useState } from "react";
import Button from "../components/Button";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { redirect, useNavigate } from "react-router-dom";
import VerifyOtp from "../components/VerifyOtp";
import { useEffect } from "react";
import baseUrl from '../Urls';

const Signup = () => {
  const navigate = useNavigate();
  const url =  `${baseUrl}api/user`;
  const [otpRecived, setOtpRecived] = useState(true);
  const [OTP, setOTP] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  function autoRefresh() {
    window.location = window.location.href;
  }

  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    otp: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/create-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
        location: details.location,
        otp: details.otp,
      }),
    }).then(console.log("I THINK WE GOT THE RESPONSE.."));

    const data = await response.json();
    console.log(data);

    if (data.success === true) {
      toast.success(data.message);
      navigate("/login");
    }
    if (data.success === false) {
      toast.error(data.message);
    }
  };

  const handleOtp = async (e) => {

    if(details.email == ""){
      toast.error("please fill all the details")
      return 0
    }

    const res = await fetch(`${url}/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: details.email,
      }),
    });
    const data = await res.json();
    console.log("data :", data);
    toast.success(data.message);
    setOTP(data.OTP);
  };

  const onchange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    // Fetch user's IP address and location data
    const res = fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setUserLocation(data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div className=" text-white flex justify-center items-center bg-gradient-to-r from-red-500 to-green-300  h-screen w-full ">
          <div className="w-[400px] rounded-2xl bg-slate-900 my-auto">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 p-8">
                <p className="text-center text-3xl text-gray-300 mb-4">
                  Register
                </p>
                <input
                  className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                  placeholder="name"
                  name="name"
                  type="text"
                  value={details.name}
                  onChange={onchange}
                  required
                />
                <input
                  className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={details.email}
                  onChange={onchange}
                  required
                />
                <input
                  className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                  placeholder="Password"
                  name="password"
                  required
                  value={details.password}
                  
                  onChange={onchange}
                />
                <input
                  className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                  placeholder="Location"
                  name="location"
                  value={details.location}
                  onChange={onchange}
                  required
                />

                {OTP ? (
                  <input
                    className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                    placeholder="OTP"
                    name="otp"
                    value={details.otp}
                    onChange={onchange}
                    required
                  />
                ) : (
                  ""
                )}

                {OTP ? (
                  <Button type="submit" text={"Register"} />
                ) : (
                  <div className="mx-auto">
                    <div
                      onClick={handleOtp}
                      class="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                    >
                      Send OTP
                      <svg
                        class="w-5 h-5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
