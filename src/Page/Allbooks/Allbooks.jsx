import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/book")
      .then((res) => {
        setBooks(res.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.error("Error loading books:", err);
        setLoading(false); // Set loading to false in case of error
        toast.error("Failed to load books.");
      });
  }, []);

  // If books are still loading, show a loading message
  if (loading) {
    return <div>Loading books...</div>;
  }

  if (books.length === 0) {
    return <div>No books available</div>;
  }

  return (
    <div className="w-10/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">All Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book._id} className="border p-4 rounded shadow-md">
            <img
              src={book.photo}
              alt={book.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{book.name}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p className="mb-5">Rating: {book.rating}</p>
            <Link to={`/update/${book._id}`}
              className="bg-blue-500 text-white py-1 px-3 rounded mt-2 hover:bg-blue-600 ">
              Update
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
