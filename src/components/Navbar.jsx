import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import Cart from "./Cart";
import logo from "../assects/Images/LOGO.jpg";
import { useNavigate } from "react-router-dom";
import Modale from "../Modals/Modale";
import { useCart } from "../contextApi/AppContext";

const Navbar = ({ props }) => {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const data = useCart();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const userName = localStorage.getItem("userName");

  return (
    <div className="w-full max-w-screen-xl sm:text-gray-900 mx-auto carousel text-white dark:bg-gray-900 flex flex-row justify-between p-1 ">
      <div className="justify-start">
        <div className="flex gap-4 flex-row items-center ">
          <div className=" ">
            <Link className=" " to="/">
              <img className="h-10 w-28 text-white m-0" src={logo} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/contact-us">Contact</Link>
          </div>

          {localStorage.getItem("authToken") ? (
            <div>
              <Link to="/my-orders">My Orders</Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        {userName ? `Welcome ${userName.split(" ")[0]}` : ``}
      </div>
      <div className="justify-center  gap-3 ">
        {localStorage.getItem("authToken") ? (
          <div className="flex gap-2 flex-row items-center ">
            <div>
              <div onClick={handleLogout} className="text-3xl">
                <i>
                  <IoIosLogOut />
                </i>
              </div>
            </div>
            
            <div className="text-3xl relative mr-6">
              <div
                onClick={() => {
                  setCartView(true);
                }}
              >
                <FaCartShopping />
                <div className="text-lg absolute bg-green-600 top-[0%] left-[50%] flex items-center justify-center text-gray-950  rounded-full h-5 w-5 ">
                  {data.length}
                </div>
              </div>
            </div>
            {cartView ? (
              <Modale onClose={() => setCartView(false)}>
                <Cart />
              </Modale>
            ) : null}
          </div>
          
        ) : (
          <div className="flex gap-4 flex-row items-center ">
            <div className="text-3xl">
              <Link to={"/login"}>
                {" "}
                <i>
                  {" "}
                  <IoIosLogIn />{" "}
                </i>{" "}
              </Link>
            </div>
            <div className="">
              <Link to={"/signup"}> Signup </Link>
            </div>
            
            <div className="text-3xl relative mr-6">
              <div
                onClick={() => {
                  setCartView(true);
                }}
              >
                <FaCartShopping />
                <div className="text-lg absolute bg-green-600 top-[0%] left-[50%] flex items-center justify-center text-gray-950  rounded-full h-5 w-5 ">
                  {data.length}
                </div>
              </div>
            </div>
            {cartView ? (
              <Modale onClose={() => setCartView(false)}>
                <Cart  />
              </Modale>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
