import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./Components/Homelayout/Homelayout.jsx";
import Allbooks from "./Page/Allbooks/Allbooks.jsx";
import AddBook from "./Page/AddBook/AddBook.jsx";
import BrrrodedBooks from "./Page/BrowserBooks/BrrrodedBooks.jsx";
import AuthProvider from "./Components/Home/AuthProvider/AuthProvider.jsx";
import Login from "./Page/Login/Login.jsx";
import Signup from "./Page/Signup/Signup.jsx";
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "/allbooks",
        element: <Allbooks></Allbooks>,
      },
      {
        path: "/addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/borodedBooks",
        element: <BrrrodedBooks></BrrrodedBooks>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
