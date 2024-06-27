import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import baseUrl from '../Urls';


const MyOrders = () => {
  const url = `${baseUrl}api/order/my-orders`

  const [orderData, setOrderData] = useState("");

  const MyOrders = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    })
      .then(console.log("GOOD TO GO   >>>>>"))
      .catch((err) => console.log("ERROR"));

    const json = await response.json();
    console.log("JSON : ", json);
    setOrderData(json.data);
    console.log("orderData   : ", orderData.order_data);
  };

  useEffect(() => {
    console.log("ORDERS DATA ARRIVED");
    MyOrders();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* <div>
        {orderData ? (
          <div className=" bg-gray-900 text-white ">
            {orderData.order_data.map((data, index) => {
              return (
                <div key={index}>
                  {data.map((order, index) => {
                    return (
                      <div key={index} className=" p-5">
                        {order.Order_date ? (
                          <div>
                            {order.Order_date} <hr />{" "}
                          </div>
                        ) : (
                          ""
                        )}

                        <div>
                          {" "}
                          <img
                            className="h-[100px] w-[150px]"
                            src={order.image}
                            alt=""
                          />{" "}
                        </div>
                        <div>{order.name}</div>
                        <div>{order.price}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <div className=" flex justify-center text-4xl items-center h-screen w-full">
              {/* <div>
                <div className="flex items-center justify-center">
                  <div className="w-[200px]  h-[200px] relative flex   justify-center items-center flex-col gap-[20px]  ">
                    <div className="flex  justify-start items-start w-full   ">
                      <div className="food"></div>
                      <div className="panBase"></div>
                      <div className="panHandle"></div>
                    </div>
                    <div className="panShadow"></div>
                  </div>
                </div>
              </div> */}
              <div>YOU HAVE NOT ORDERD ANYTHING YET</div>
            </div>
          </div>
        )}
      </div>
*/}
<div>
  {orderData ? (
  <div className="bg-gray-900 text-white">
    {orderData.order_data.reverse().map((data, index) => {
      return (
        <div key={index} className="p-5">
          {data.map((order, index) => {
            return (
              <div key={index}>
                {order.Order_date ? (
                  <div>
                    {order.Order_date} <hr />
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <img
                    className="h-[100px] w-[150px]"
                    src={order.image}
                    alt=""
                  />
                </div>
                <div>{order.name}</div>
                <div>{order.price}</div>
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
) : (
  <div>
    <div className="flex justify-center text-4xl items-center h-screen w-full">
      <div>YOU HAVE NOT ORDERED ANYTHING YET</div>
    </div>
  </div>
)}
</div>
  
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyOrders;
