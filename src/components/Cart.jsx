import React from "react";
import { useCart, useDispatchCart } from "../contextApi/AppContext";
import toast from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import baseUrl from "../Urls"

const Cart = ({setCartView}) => {

  
  const navigate = useNavigate();
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="m-5  w-96 text-center">
        <div> The Cart Is Empty </div>
      </div>
    );
  }

  
  const handleCheckOut = async () => {
    const url = `${baseUrl}api/order/order-data`;
    const userEmail = localStorage.getItem("userEmail");
    console.log(userEmail);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    const json = await response.json();

    if (json.success) {
      dispatch({ type: "DROP" });
      toast.success(json.message);
    } else {
      toast.error(json.message);
    }

    console.log("ORDER RESPONSE : ", json);
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-900 uppercase dark:text-gray-400"
                    >
                      Food
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-900 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-900 uppercase dark:text-gray-400"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-900 uppercase dark:text-gray-400"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  {data.map((food, index) => (
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-900">
                        <img
                          className="h-[50px] w-[90px] "
                          src={food.image}
                          alt=""
                        />
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-900">
                        {food.name}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-900">
                        {food.price}
                      </td>
                      <button
                        className=" "
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                        class="px-6 py-4 whitespace-nowrap text-center font-medium text-3xl text-gray-800 dark:text-gray-900"
                      >
                        {" "}
                        <TiDeleteOutline />{" "}
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div>
                <h1> Total Price : ₹ {totalPrice}/- </h1>
              </div>
              {localStorage.getItem("authToken") ? (
                <div onClick={handleCheckOut}>
                  <Button onClick={handleCheckOut} text={"Check Out"} />
                </div>
              ) : (
                <button onClick={ () => {
                  navigate("/login") 
                  
                } } >
                  please logIn/Signup First
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
