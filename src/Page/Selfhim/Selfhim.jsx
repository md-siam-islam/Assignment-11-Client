import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ReactStars from "react-rating-stars-component";

import img from "../../../src/assets/image/The Power of Habit.jpg";
import img2 from "../../../src/assets/image/Atomic Habits.webp";
import img3 from "../../../src/assets/image/the-subtle-art-of-not-giving-a-fuck.jpg";

const Selfhim = () => {
  return (
    <div>
      <Navbar />

      <div className="w-11/12 mx-auto my-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Self-Help Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Book 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img}
              alt="The Power of Habit"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              The Power of Habit
            </h3>
            <p className="text-gray-500 mb-2">Author: Charles Duhigg</p>
            <p className="text-gray-500 mb-2">Category: Self-Help</p>
            <p className="text-gray-500 mb-2">Quantity: 5</p>
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

          {/* Book 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img2}
              alt="Atomic Habits"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Atomic Habits
            </h3>
            <p className="text-gray-500 mb-2">Author: James Clear</p>
            <p className="text-gray-500 mb-2">Category: Self-Help</p>
            <p className="text-gray-500 mb-2">Quantity: 3</p>
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

          
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={img3}
              alt="The Subtle Art of Not Giving a F*ck"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              The Subtle Art of Not Giving a F*ck
            </h3>
            <p className="text-gray-500 mb-2">Author: Mark Manson</p>
            <p className="text-gray-500 mb-2">Category: Self-Help</p>
            <p className="text-gray-500 mb-2">Quantity: 2</p>
            <div className="flex items-center mb-4">
              <ReactStars
                count={5}
                value={4.3}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">4.3</span>
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

export default Selfhim;
