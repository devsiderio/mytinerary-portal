import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Itineraries from "./pages/Itineraries";
import NavLayout from "./layouts/NavLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/itineraries", element: <Itineraries /> },
      { path: "/cities", element: <Cities /> },
      { path: "/city-detail/:city", element: <CityDetail /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);

export default router;
