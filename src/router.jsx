import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Itineraries from "./pages/Itineraries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/*", element: <NotFound /> },
      { path: "/", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/itineraries", element: <Itineraries /> },
      { path: "/cities", element: <Cities /> },
      { path: "/city/:city_id", element: <CityDetail /> },

    ],
  },
]);

export default router;
