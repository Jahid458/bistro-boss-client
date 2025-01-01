import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
<<<<<<< HEAD
import Login from "../Pages/Login/Login";
=======
>>>>>>> e7fa2ffff5b108acfef3072f4aae787d4d405269


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
<<<<<<< HEAD
        },
        {
          path:'login',
          element:<Login></Login>
=======
>>>>>>> e7fa2ffff5b108acfef3072f4aae787d4d405269
        }
      ]
    },
  ])