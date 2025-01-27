import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ReactStars from "react-rating-stars-component";

import img from "../../../src/assets/image/sapiens.png";
import img2 from "../../../src/assets/image/The History of the Ancient World.jpg";

const History = () => {
  return (
    <div>
      <Navbar />

      <div className="w-11/12 mx-auto my-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          History Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Book 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img}
              alt="Sapiens"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Sapiens: A Brief History of Humankind
            </h3>
            <p className="text-gray-500 mb-2">Author: Yuval Noah Harari</p>
            <p className="text-gray-500 mb-2">Category: History</p>
            <p className="text-gray-500 mb-2">Quantity: 4</p>
            <div className="flex items-center mb-4">
              <ReactStars
                count={5}
                value={4.9}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">4.9</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Details
            </button>
          </div>

          {/* Book 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img2}
              alt="The History of the Ancient World"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              The History of the Ancient World
            </h3>
            <p className="text-gray-500 mb-2">Author: Susan Wise Bauer</p>
            <p className="text-gray-500 mb-2">Category: History</p>
            <p className="text-gray-500 mb-2">Quantity: 6</p>
            <div className="flex items-center mb-4">
              <ReactStars
                count={5}
                value={5}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Details
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default History;
