import React, { useState } from "react";
import Button from "./Button";
import img1 from "../assects/Images/img-1.jpg";
import { useDispatchCart, useCart } from "../contextApi/AppContext";
import toast from "react-hot-toast";

const Card = ({ data }) => {
  const temp = useCart();
  const dispatch = useDispatchCart();
  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: data._id,
      name: data.name,
      price: data.price,
      image: data.image,
    });
    console.log(temp);
    toast.success(`${data.name} is added to cart successfully`);
  };

  return (
    <div className=" ">
      <div className="w-60 h-70 flex flex-col bg-gray-300 justify-center items-center  p-3 gap-1 rounded-2xl">
        <div className="h-[130px]   w-[215px] bg-gray-700 rounded-xl">
          <img className="h-[100%] w-[100%]" src={data.image} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <span className="text-xl font-bold">{data.name}</span>
              <p className="text-xs text-gray-700"></p>
            </div>
            <div className="flex flex-col">
              <span className="font-bold   text-red-600"> ₹ {data.price}</span>
            </div>
          </div>

          <div className=" justify-center ">
            <button
              onClick={handleAddToCart}
              class="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
            >
              <span class=" text-black hover:content-none font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                Add Item
              </span>
              <span class="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                <svg
                  class="svg w-8 text-white"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
              </span>
            </button>
          </div>
          {/* <div>
          <Button text={"buy now"} />
        </div>{" "} */}
          {/* <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Add to cart</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
