import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homelayout from './Components/Homelayout/Homelayout.jsx';
import Allbooks from './Page/Allbooks/Allbooks.jsx';
import AddBook from './Page/AddBook/AddBook.jsx';
import BrrrodedBooks from './Page/BrowserBooks/BrrrodedBooks.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children:[
      {
        path: '/allbooks',
        element:<Allbooks></Allbooks>
      },
      {
        path:"/addbook",
        element:<AddBook></AddBook>,
      },
      {
        path:"/borodedBooks",
        element:<BrrrodedBooks></BrrrodedBooks>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
