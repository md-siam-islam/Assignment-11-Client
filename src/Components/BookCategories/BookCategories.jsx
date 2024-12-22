import React from "react";

import img from "../../../src/assets/image/fiction.jpg";
import img2 from "../../../src/assets/image/3869._UX160_.jpg";
import img3 from "../../../src/assets/image/51smCrdmpiL._SL500_.jpg";
import img4 from "../../../src/assets/image/self.webp";
import { Link } from "react-router-dom";

const BookCategories = () => {
  return (
    <div className="my-14">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Book Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <img
            src={img}
            alt="img"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Fiction</h3>

          <p className="text-gray-500 mb-4">
            Explore imaginative and creative books.
          </p>

          <Link to={'/fiction'} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Explore Fiction
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <img
            src={img2}
            alt="img"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Science</h3>

          <p className="text-gray-500 mb-4">
          Discover the wonders of science and technology.
          </p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Explore Science
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <img
            src={img3}
            alt="img"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">History</h3>

          <p className="text-gray-500 mb-4">
          Dive into the stories of the past.
          </p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Explore History
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <img
            src={img4}
            alt="img"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Self-Help</h3>

          <p className="text-gray-500 mb-4">
          Books to inspire and improve your life.
          </p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Explore Self-Help
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookCategories;
