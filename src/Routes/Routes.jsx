import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/secret/secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/cart/cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'menu',
            element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element: <Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        },
        {
          path: 'secret',
          element:<PrivateRoute>
           <Secret></Secret>
          </PrivateRoute>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        //normal user routes
        {
          path:'cart',
          element: <Cart></Cart>
        },
        //admin only routes
        {
          path: 'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },

        {
          path:'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ])