import React, { useState } from "react";
import Button from "./Button";
import convertToBase64 from "../services/convertToBase64";
import toast from "react-hot-toast";
import baseUrl from '../Urls';

const UploadFood = () => {
  const url = `${baseUrl}api/data/food-upload`;

  const [details, setDetails] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      if (response.ok) {
        const json = await response.json();
        if (json.success) {
          toast.success("Data uploaded successfully");
        } else {
          toast.error("Error while uploading data");
        }
      } else {
        toast.error("Network error. Please try again later.");
      }
    } catch (error) {
      console.error("Error during data upload:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setDetails({ ...details, image: base64 });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Submit food details
          </h2>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              onChange={onchange}
              name="name"
              placeholder="name"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            {/* <input
              onChange={onchange}
              name="category"
              placeholder="category"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            /> */}
            
            <select
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              onChange={onchange}
              type="select"
              name="category"
              id="" >
                <option value="other" > other </option>
                <option value="Biryani/Rice">Biryani/Rice</option>
                <option value="Starter">Starter</option>
                <option value="Pizza">Pizza</option>
            </select>
            
            <input
              onChange={onchange}
              name="price"
              placeholder="price"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            <input
              onChange={onchange}
              name="description"
              placeholder="description"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            <input
              onChange={onchange}
              name="image"
              placeholder="image"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="file"
            />

            <Button text="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadFood;

