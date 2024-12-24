import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Authcontext } from "../../Components/Home/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const BookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const [returnData, setReturnDate] = useState();

  const { user } = useContext(Authcontext);

  const Handledetails = () => {
    axios
      .get(`https://assignment-11-phi-hazel.vercel.app/book/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book data:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    Handledetails();
  }, [id]);

  if (loading) {
    return <div className="text-center my-20">Loading book details...</div>;
  }

  const handleBorrowbook = (e) => {
    e.preventDefault();

    const BorrowData = {
      email: user.email,
      name: user.displayName,
      returnData,
      photo: data.photo,
      Bookname: data.name,
      Authprname: data.author,
      Category: data.category,
      Discerption: data.description,
      Bookid: data._id,
    };



    axios
      .post("https://assignment-11-phi-hazel.vercel.app/borrowBook", BorrowData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Borrow Book Add Success");

          const modal = document.getElementById("my_modal_1");
          modal.close();
          Handledetails();
        } else {
          toast.error("Failed to add a Borrow book. Try again.");
        }
      })

      .catch((error) => {
        const message = error.message;

        if (message) {
          toast.error("Sorry You have alredy Borrow book");
          const modal = document.getElementById("my_modal_1");
          modal.close();
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Book Details || {data.name}</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto my-20 max-w-4xl bg-gray-400 shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book Image */}
          <div className="flex justify-center">
            <img
              src={data.photo}
              alt={data.name}
              className="w-full h-96 object-cover rounded-md shadow-md"
            />
          </div>

          {/* Book Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {data.name}
            </h1>
            <p className="text-gray-600 mb-3">
              <span className="font-semibold text-gray-700">Author: </span>
              {data.author}
            </p>
            <p className="text-gray-600 mb-3">
              <span className="font-semibold text-gray-700">Category: </span>
              {data.category}
            </p>
            <p className="text-gray-600 mb-3">
              <span className="font-semibold text-gray-700">Quantity: </span>
              {data.quantity}
            </p>
            <p className="text-gray-600 mb-3">
              <span className="font-semibold text-gray-700">Rating: </span>
              {data.rating} ⭐
            </p>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold text-gray-700">Description: </span>
              {data.description}
            </p>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 rounded"
            >
              Borrow
            </button>
          </div>

          {/* modal start  */}

          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h2 className="text-2xl font-semibold mb-4">Borrow Book</h2>

              <form onSubmit={handleBorrowbook}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.displayName}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Return Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-md"
                    //   value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                  />
                </div>
                <button
                  onClick={
                    data.quantity > 0
                      ? () => document.getElementById("my_modal_1").showModal()
                      : null
                  }
                  className={`${
                    data.quantity > 0
                      ? "bg-blue-500 hover:bg-blue-600 text-white px-5 rounded"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed px-5 rounded"
                  }`}
                  disabled={data.quantity === 0}
                >
                  {data.quantity > 0 ? "Borrow" : "Out of Stock"}
                </button>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookDetails;
