import React, { useState } from "react";

import { toast } from "react-toastify"; // Toast notification
import { auth } from "../../Firebase/Firebaseinit";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddBook = () => {
  

  
  const handleSubmit =  (e) => {
    e.preventDefault();

    const photo =e.target.image.value
    
    const name = e.target.name.value
    const quantity = e.target.quantity.value
    const author = e.target.author.value 
    const category = e.target.category.value
    const description = e.target.description.value 

    const rating = e.target.rating.value 

    const Bookdata = {
        photo,name,quantity,author,description,rating,category
    }

    console.log(Bookdata);

    axios.post('http://localhost:5000/book',Bookdata)
    .then((res) => {
        if (res.data.insertedId) {
            toast.success("Book added successfully!");
            e.target.reset();
        } else {
            toast.error("Failed to add book. Try again.");
        }
        console.log("Response:", res.data);
    })
    .catch((err) => {
        console.error("Error:", err);
        toast.error("Something went wrong!");
    });
    
  
   
  };

  return (
    <div className="w-10/12 mx-auto my-20">
      <Helmet>
        <title>Add Book</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">Add New Book</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            
            placeholder="Enter image URL"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

       
       
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Book Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter book name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

      
      
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            min="1"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

       
       
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Author Name</label>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select
            name="category"
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select category</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Fiction">Fiction</option>
          </select>
        </div>

        {/* Short Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Short Description</label>
          <textarea
            name="description"
            placeholder="Enter a short description"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
