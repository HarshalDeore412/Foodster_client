import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import category from "../assects/data/foodCategory.json";
import baseUrl from '../Urls';

const Home = () => {
  const url =  `${baseUrl}api/data/get-all-data`;
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    setLoading(true)
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(console.log("<------------ GOOD TO GO -------->"))
    .catch((err) => {
      console.log(err)
      alert(err)
    })

    const data = await response.json();

    console.log("DATA : ", data.data);

    setFoodData(data.data);
    setLoading(false)
  };

  useEffect(() => {
    
    getData();
    
  }, []);

  return (
    <div className="w-screen max-w-screen-xl mx-auto" >
      <div>
        <Navbar props={{ search, setSearch }} />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="h-fit w-full max-w-screen-xl mx-auto ">
        {loading ? (
          <Loader />
        ) : (
          category.map((data) => {
            return (
              <div >
                <div className="text-2xl outline-none border-none font-bold p-2 pl-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                  {data.CategoryName}
                </div>

                {foodData ? (
                  <div className="flex bg-gradient-to-r outline-none border-none from-purple-400 via-pink-500 to-red-500 flex-row gap-5 bg-transparent overflow-y-auto ">
                    {foodData
                      .filter(
                        (item) =>
                          item.category === data.CategoryName &&
                          item.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="bg-transparent">
                            {" "}
                            <Card data={filterItems} />{" "}
                          </div>
                        );
                      })}
                  </div>
                ) : (
                  <div> no data found </div>
                )}
              </div>
            );
          })
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
