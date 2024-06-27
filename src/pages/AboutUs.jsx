import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <div>
         <Navbar />
      </div>
      <div className=" w-full mx-auto bg-pink-100 h-screen text-gray-800 p-8">
        <div className="container mx-auto">
          <div className="bg-white rounded shadow p-6 m-4">
            <h1 className="text-2xl font-bold mb-4">About Foodster</h1>
            <p>
              Welcome to Foodster, the ultimate destination for food lovers! Our
              mission is to bring deliciousness right to your doorstep. With a
              wide variety of cuisines from local favorites to international
              delicacies, we ensure that every bite is a celebration of flavors.
            </p>
            <p className="mt-4">
              Our platform is designed for ease of use, allowing you to order
              your favorite meals in just a few clicks. We're committed to
              providing you with a seamless food ordering experience,
              exceptional customer service, and timely delivery. Because at
              Foodster, we believe that good food is the foundation of genuine
              happiness.
            </p>
            <p className="mt-4">
              Join us on this gastronomic journey and indulge in the comfort of
              having your food delivered right to your home or office. Foodster
              is not just about food delivery; it's about creating memorable
              dining experiences, wherever you are.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
