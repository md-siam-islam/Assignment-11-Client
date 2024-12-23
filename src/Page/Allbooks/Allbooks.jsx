import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("card"); // Initial view set to 'card'

  useEffect(() => {
    axios
      .get("https://assignment-11-phi-hazel.vercel.app/book")
      .then((res) => {
        setBooks(res.data);
        setFilteredBooks(res.data); // Initially show all books
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading books:", err);
        setLoading(false);
        toast.error("Failed to load books.");
      });
  }, []);

  // Filter books with quantity > 0
  const handleFilterAvailableBooks = () => {
    const availableBooks = books.filter((book) => book.quantity > 0);
    setFilteredBooks(availableBooks);
  };

  // Show all books
  const handleShowAllBooks = () => {
    setFilteredBooks(books);
  };

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (books.length === 0) {
    return <div>No books available</div>;
  }

  return (
    <div className="w-10/12 mx-auto my-10">
      <Helmet>
        <title>All Books</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">All Books</h2>

      {/* View and Filter Controls */}
      <div className="flex justify-between items-center mb-4">
        {/* Dropdown for View Selection */}
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>

        {/* Filter Buttons */}
        <div>
          <button
            onClick={handleShowAllBooks}
            className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 mr-2"
          >
            Show All Books
          </button>
          <button
            onClick={handleFilterAvailableBooks}
            className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
          >
            Show Available Books
          </button>
        </div>
      </div>

      {/* Conditional Rendering Based on View */}
      {view === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <div key={book._id} className="border p-4 rounded shadow-md">
              <img
                src={book.photo}
                alt={book.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{book.name}</h3>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Quantity: {book.quantity}</p>
              <p className="mb-5">Rating: {book.rating}</p>
              <Link
                to={`/update/${book._id}`}
                className="bg-blue-500 text-white py-1 px-3 rounded mt-2 hover:bg-blue-600"
              >
                Update
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Photo</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Author</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Rating</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book._id}>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={book.photo}
                    alt={book.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{book.name}</td>
                <td className="border border-gray-300 px-4 py-2">{book.author}</td>
                <td className="border border-gray-300 px-4 py-2">{book.category}</td>
                <td className="border border-gray-300 px-4 py-2">{book.quantity}</td>
                <td className="border border-gray-300 px-4 py-2">{book.rating}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    to={`/update/${book._id}`}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllBooks;
