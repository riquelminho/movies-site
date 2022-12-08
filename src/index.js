import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import TrendingPage from "./Pages/TrendingPage";
import WatchingPage from "./Pages/WatchingPage";
import AllMovies from "./Pages/AllMovies";
import TvShowPage from "./Pages/TvShowPage";
import TopRatedPage from "./Pages/TopRatedPage";
import UpcomingPage from "./Pages/UpcomingPage";
import WatchingTvPage from "./Pages/WatchingTvPage ";
import Search from "./Components/Search";

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
  {
    path: "/WatchingTvPage/:id", element: <WatchingTvPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} /> 
  </React.StrictMode>
);


