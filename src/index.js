import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter,RouterProvider,Route,} from "react-router-dom";
import Home from "./Home/Home";
import TrendingPage from "./TrendingPage";

const router = createBrowserRouter([
  
  {
    path: "/", element: <Home />,
  },
  {
    path: "/TrendingPage", element: <TrendingPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  
  <RouterProvider router={router} /> 
      

  </React.StrictMode>
);


