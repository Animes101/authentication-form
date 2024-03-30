import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path:'/signin',
            element:<SignIn />
        },
        {
            path:'/signup',
            element:<SignUp />
        }
      ]
    },
  ]);