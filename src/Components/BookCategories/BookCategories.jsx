import React from "react";
import { Link } from "react-router-dom";

const BookCategories = () => {
  const categories = [
    {
      id: 1,
      category: "Fiction",
      description: "Explore imaginative and creative books.",
      image: "https://everyday-reading.com/wp-content/uploads/2024/01/Screen-Shot-2024-01-08-at-8.19.47-PM.png",
      link: "/fiction",
    },
    {
      id: 2,
      category: "Science",
      description: "Discover the wonders of science and technology.",
      image: "https://upload.wikimedia.org/wikipedia/en/6/6a/Measly_medicine.JPG",
      link: "/science",
    },
    {
      id: 3,
      category: "History",
      description: "Dive into the stories of the past.",
      image: "https://orion-uploads.openroadmedia.com/md_10fdb18399cf-wood-1.jpg?w=640",
      link: "/history",
    },
    {
      id: 4,
      category: "Self-Help",
      description: "Books to inspire and improve your life.",
      image: "https://m.media-amazon.com/images/I/51NnnaOwXIL._AC_UF894,1000_QL80_.jpg",
      link: "/selfhim",
    },
  ];

  return (
    <div className="my-14">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Book Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={category.image}
              alt={category.category}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {category.category}
            </h3>
            <p className="text-gray-500 mb-4">{category.description}</p>
            <Link
              to={`/categoriesbook/${category.category}`}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Explore {category.category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
