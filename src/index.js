import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Home/Home";
import TrendingPage from "./TrendingPage";
import ContactUs from "./ContactUs";

import Search from "./Search";
import WatchingPage from "./WatchingPage";
import AllMovies from "./AllMovies";
import TvShowPage from "./TvShowPage";
import TopRatedPage from "./TopRatedPage";
import UpcomingPage from "./UpcomingPage";

const router = createBrowserRouter([
  

  {
    path: "/", element: <Home/>,
  },
  {
    path: "/Search", element: <Search />,
  },
  {
    path: "/TrendingPage", element: <TrendingPage />,
  },
  {
    path: "/AllMovies", element: <AllMovies />,
  },
  {
    path: "/TvShowPage", element: <TvShowPage />,
  },
  {
    path: "/TopRatedPage", element: <TopRatedPage/>,
  },
  {
    path: "/UpcomingPage", element: <UpcomingPage/>,
  },
  {
    path: "/ContactUs", element: <ContactUs />,
  },
  {
    path: "/WatchingPage/:id", element: <WatchingPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} /> 
  
  </React.StrictMode>
);


