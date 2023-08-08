import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
