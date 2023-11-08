
import { createBrowserRouter } from "react-router-dom";

import Hotels from "../components/Hotels/Hotels";
import Restaurants from "../components/Restaurents/Restaurents";
import ThinksToDo from "../components/ThinksToDo/ThinksToDo";


import Layout from "../Layout/Layout";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import { Signup } from "../pages/Signup";
import Cards from "../components/Cards/Cards";
import Blog from "../pages/Blog"
import VacationRentals from "../components/VacationRentals/VacationRentals";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import HotelsDetails from "../HotelsDetails/HotelsDetails";
import Profile from "../components/DashBoard/Profile";
import Trip from "../components/DashBoard/Trip";
import Booking from "../components/DashBoard/Booking";
import HotelReservation from "../components/Hotels/HotelsReservation";
import RestaurantDetails from "../components/Restaurents/RestaurantDetails";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import TripsDetails from "../components/ThinksToDo/TripsDetails";
import SetTrip from "../components/ThinksToDo/SetTrip";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
            path:"/",
            element:<LandingPage />

        },
        {
            path: "/",
            element: <Layout />,
        
        },
        {
            path:"/Signup",
            element: <Signup />
        },
        {
            path:"/Contact",
            element: <Contact />

        },
        {
            path:"/Blog",
            element: <Blog />
        },
        {
            path:"/Login",
            element: <Login />
        },
        {
            path:"/Cards",
            element: <Cards />,
            
        },
        {
            path:"/Hotels",
            element:<Hotels/>,
            
        }, 
        {
            path:"/ThinksToDo",
            element:<ThinksToDo/>
        }, 
        {
            path:"/Restaurants",
           element:<Restaurants/>
        }, 
        {
            path:"/Vacations",
           element:<VacationRentals/>
        }, 
        {
            
            path : "/hotel/:id",
            element:
            // <PrivateRoute>
            <HotelsDetails/>
            // </PrivateRoute>
        },
        {
            path:"/profile",
           element:<PrivateRoute>
           <Profile/>
       </PrivateRoute>
        }, 
        {
            path:"/trip",
           element:<PrivateRoute>
           <Trip/>
       </PrivateRoute>
        },
        {
            path:"/booking",
           element:
           <PrivateRoute>
                <Booking/>
            </PrivateRoute>
        },  
        {
            path:"/hotel-reservation/:id",
           element:
            <PrivateRoute>
                <HotelReservation/>
            </PrivateRoute>
        },
        {
           path:"/restaurant-details/:id",
           element:<RestaurantDetails/>
        },   
        {
            path:"/blog-details/:id",
            element:<BlogDetails/>
         },  
         {
            path:"/trip-details/:id",
            element:<TripsDetails/>
         }, 
         {
            path:"/set-trip/:id",
            element:
            <PrivateRoute>
                <SetTrip/>
            </PrivateRoute>
        },
      ]},
   


  ]);