import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/book/:id",
            element: <PrivateRout><BookService></BookService></PrivateRout>,
            loader: ({params}) =>fetch(`https://car-doctor-seven.vercel.app/services/${params.id}`)
        },
        {
            path: "/bookings",
            element: <PrivateRout><Bookings></Bookings></PrivateRout>
        }
      ]
    },
  ]);

  export default router