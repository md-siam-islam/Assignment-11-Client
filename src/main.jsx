import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./Components/Homelayout/Homelayout.jsx";
import Allbooks from "./Page/Allbooks/Allbooks.jsx";
import AddBook from "./Page/AddBook/AddBook.jsx";
import BrrrodedBooks from "./Page/BrowserBooks/BrrrodedBooks.jsx";
import AuthProvider from "./Components/Home/AuthProvider/AuthProvider.jsx";
import Login from "./Page/Login/Login.jsx";
import Signup from "./Page/Signup/Signup.jsx";
import { ToastContainer } from 'react-toastify';
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import HomeSection from "./HomeSection/HomeSection.jsx";
import Updatepage from "./Page/Update/Updatepage.jsx";
import CategoriesBook from "./Page/CategoriesBook/CategoriesBook.jsx";
import PrivetRoute from "./PrivetRoute/PrivetRoute.jsx";
import BookDetails from "./Page/BookDetails/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<HomeSection></HomeSection>
      },
      {
        path: "/allbooks",
        element: <PrivetRoute><Allbooks></Allbooks></PrivetRoute>,
      },
      {
        path: "/addbook",
        element: <PrivetRoute><AddBook></AddBook></PrivetRoute>,
      },
      {
        path: "/borodedBooks",
        element: <PrivetRoute><BrrrodedBooks></BrrrodedBooks></PrivetRoute>,
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
  {
    path:'/update/:id',
    element:<Updatepage></Updatepage>
  },
  {
    path:'/categoriesbook/:category',
    element:<CategoriesBook></CategoriesBook>
  },
  {
    path:'/details/:id',
    element:<BookDetails></BookDetails>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
