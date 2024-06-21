import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import data from "../assects/data/foodCategory.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadFood from "../components/UploadFood"
import baseUrl from '../Urls';

const AdminPanel = () => {
  const url = `${baseUrl}api/data/get-all-data`;
  const [foodItems, setFoodItems] = useState([]);
  const [newFoodItem, setNewFoodItem] = useState("");

  const addFoodItem = () => {
    setFoodItems([...foodItems, newFoodItem]);
    setNewFoodItem("");
  };

  const getData = async () => {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    let res = await data.data;

    setFoodItems(res);
  };

  const deleteFoodItem = (index) => {
    url =  `${baseUrl}/api/data/delet-product:par`

    fetch()

  };

  const updateFoodItem = (index, newItem) => {
    const updatedItems = foodItems.map((item, i) =>
      i === index ? newItem : item
    );
    setFoodItems(updatedItems);
  };

  useEffect(() => {
    getData();
    console.log("useEffect", foodItems);
  }, []);

  return (
    <div className="  w-full max-w-screen-xl mx-auto w-screen">
      <div className="w-full" >
        <Navbar />
      </div>
      <div className="flex justify-center p-4">
        <div className="mb-4">
          <input
            type="text"
            className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            placeholder="Add new food item"
            value={newFoodItem}
            onChange={(e) => setNewFoodItem(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addFoodItem}
          >
            Add Item
          </button>
        </div>
      </div>

      <div className="flex w-full" >

      {/* left side of the page  */}
      <div className="  w-[50%]" >
        {foodItems.map((filterItems) => {
          return (
            <div
              key={filterItems._id}
              className="bg-transparent p-5 border-2 border-red-600"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    className="  h-[200px] w-[300px]"
                    src={filterItems.image}
                    alt=""
                  />
                </div>
                <div className=" flex justify-center ">{filterItems.name}</div>
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteFoodItem()}
                >
                  Delete
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => updateFoodItem(prompt("Update item:"))}
                >
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>

        {/* right side of the page */}
      <div className="flex justify-center border-2 border-red-700 w-[50%] " >

        {/* <form action="">
          <div>
            form
          </div>
        </form> */}

        <div>
          <UploadFood />
        </div>

      </div>


      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPanel;
