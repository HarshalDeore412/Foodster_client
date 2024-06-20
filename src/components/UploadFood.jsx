import React, { useState } from "react";
import Button from "./Button";
import convertToBase64 from "../services/convertToBase64";
import category from "../assects/data/foodCategory.json";
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
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: details.name,
        description: details.description,
        category: details.category,
        price: details.price,
        image: details.image,
      }),
    })
      .then(console.log("good to go ...."))
      .catch((err) => console.log("error : ", err));

    console.log(response);
    const json = await response.json();
    console.log(json);

    if (json.success) {
      toast.success("data uploaded successfull");
    } else {
      toast.error("error while uploading the data");
    }
  };

  const onchange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const onFileChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    details.image = base64;
    console.log(details);
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
              onChange={onFileChange}
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
