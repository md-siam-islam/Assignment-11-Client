import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";

const CategoriesBook = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/books/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching category data:", err));
  }, [category]);

  return (
    <div className="my-14 w-11/12 mx-auto">
        <Helmet>
            <title>Category Book</title>
        </Helmet>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Books in {category} Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => {
                  const rating = parseFloat(book.rating);
            return(
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={book.photo}
              alt="The Subtle Art of Not Giving a F*ck"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {book.name}
            </h3>
            <p className="text-gray-500 mb-2">Author : {book.author}</p>
            <p className="text-gray-500 mb-2">Category : {book.category}</p>
            <p className="text-gray-500 mb-2">Quantity : {book.quantity}</p>
            <div className="flex items-center mb-4">
              <ReactStars
                count={5}
                value={rating}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">{rating}</span>
            </div>
            <Link to={`/details/${book._id}`} className="bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition">
              Details
            </Link>
          </div>
            )
        })}
      </div>

    </div>
  );
};

export default CategoriesBook;
