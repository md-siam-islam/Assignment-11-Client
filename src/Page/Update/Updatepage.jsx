import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Updatepage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://assignment-11-phi-hazel.vercel.app/book/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-red-500">Book not found!</p>
      </div>
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const author = e.target.author.value;
    const category = e.target.category.value;
    const rating = e.target.rating.value;

    const updatedBook = {
      photo,
      name,
      author,
      category,
      rating,
    };

    axios
      .put(`https://assignment-11-phi-hazel.vercel.app/book/${id}`, updatedBook)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Book updated successfully!");
          navigate("/allbooks");
        } else {
          toast.error("Failed to update the book!");
        }
      })

      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <title>Book Update || {book.name}</title>
      </Helmet>
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Book: {book.name}
        </h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Photo:
            </label>
            <input
              type="text"
              defaultValue={book.photo}
              name="photo"
              placeholder="Photo URL"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              defaultValue={book.name}
              name="name"
              placeholder="Book Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Author:
            </label>
            <input
              type="text"
              defaultValue={book.author}
              name="author"
              placeholder="Author Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category:
            </label>
            <select
              name="category"
              defaultValue={book.category}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Self-Help">Self-Help</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Fiction">Fiction</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Rating:
            </label>
            <input
              type="number"
              defaultValue={book.rating}
              name="rating"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Updatepage;
