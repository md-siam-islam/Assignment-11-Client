import React, { useContext, useState, useEffect } from "react";
import { Authcontext } from "../../Components/Home/AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const BrrrodedBooks = () => {
  const { user } = useContext(Authcontext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState();

  const allBooks = () => {
    axios
      .get(`http://localhost:5000/borrowBook?email=${user.email}`)
      .then((res) => {
        setBooks(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching visas:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    allBooks();
  }, [user.email]);

  const handleReturnBook = async (_id) => {
    try {
      const isDeleted = await axios.delete(
        `http://localhost:5000/returnBook/${_id}`
      );
      if(isDeleted?.data?.deletedCount){
        allBooks()
        toast.success("Book return Done")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-11/12 mx-auto my-20">
      <Helmet>
        <title>Borrow Books</title>
      </Helmet>
      <h3 className="text-center text-3xl font-bold mb-8">Borrowed Books</h3>
      {books.length == 0 ? (
        <p className="text-center text-lg text-gray-600">
          You have no borrowed books.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              <img
                src={book.photo}
                alt={book.Bookname}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{book.Bookname}</h4>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Category: </span>
                {book.Category}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Borrowed Date: </span>
                {new Date(book.borrowedDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Return Date: </span>
                {new Date(book.returnData).toLocaleDateString()}
              </p>
              <button
                onClick={() => handleReturnBook(book?._id)}
                className="w-full py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
              >
                Return
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrrrodedBooks;
