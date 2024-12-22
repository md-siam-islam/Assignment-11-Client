import React from "react";
import ReactStars from "react-rating-stars-component";

import img from "../../../src/assets/image/A Brief History of Time2.jpg"
import img2 from "../../../src/assets/image/The Selfish Gene.jpg"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ScienceBooks = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="w-11/12 mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Science Books
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img}
              alt="img"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
            A Brief History of Time
            </h3>
            <p className="text-gray-500 mb-2">Author : Stephen Hawking</p>
            <div className="flex items-center mb-4">
              <ReactStars
                count={5}
                value={4.6}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">4.6</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Details
            </button>
          </div>


          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img2}
              alt="img"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
            The Selfish Gene
            </h3>
            <p className="text-gray-500 mb-2">Author : Richard Dawkins</p>
            <div className="flex items-center mb-4">
              <ReactStars
                count={5}
                value={4.7}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">4.7</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Details
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ScienceBooks;