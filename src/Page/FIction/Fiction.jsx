import React from "react";
import ReactStars from "react-rating-stars-component";

import img from "../../../src/assets/image/The Great Gatsby.png";
import img2 from "../../../src/assets/image/To Kill a Mockingbirdjpg.jpg";
import img3 from "../../../src/assets/image/1984.jpg";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Fiction = () => {
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto my-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Fiction Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Book 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img}
              alt="The Great Gatsby"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              The Great Gatsby
            </h3>
            <p className="text-gray-500 mb-2">Author: F. Scott Fitzgerald</p>
            <p className="text-gray-500 mb-2">Category: Fiction</p>
            <p className="text-gray-500 mb-2">Quantity: 5</p>
            <div className="flex items-center mb-4">
              <ReactStars
                count={5}
                value={4.5}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">4.5</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Details
            </button>
          </div>

          {/* Book 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img2}
              alt="To Kill a Mockingbird"
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              To Kill a Mockingbird
            </h3>
            <p className="text-gray-500 mb-2">Author: Harper Lee</p>
            <p className="text-gray-500 mb-2">Category: Fiction</p>
            <p className="text-gray-500 mb-2">Quantity: 3</p>
            <div className="flex items-center mb-4">
              <ReactStars
                count={5}
                value={4.8}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">4.8</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Details
            </button>
          </div>

          {/* Book 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img3}
              alt="1984"
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              1984
            </h3>
            <p className="text-gray-500 mb-2">Author: George Orwell</p>
            <p className="text-gray-500 mb-2">Category: Fiction</p>
            <p className="text-gray-500 mb-2">Quantity: 7</p>
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
      <Footer />
    </div>
  );
};

export default Fiction;
