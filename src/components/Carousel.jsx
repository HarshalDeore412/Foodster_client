import React from "react";
import img1 from "../assects/Images/img-1.jpg";
import img2 from "../assects/Images/img-2.jpg";
import img3 from "../assects/Images/img-3.jpg";
import img4 from "../assects/Images/img-4.jpg";
import img5 from "../assects/Images/img-5.jpg";
import { useState , useEffect } from "react";

const Carousel = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3,img4,img5]; // Replace with your image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto carousel h-[400px] h-fit content-fit overflow-hidden">
      <div
        className="carousel-inner index-10 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item flex-none w-full">
            <img className="index-0" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Carousel;
