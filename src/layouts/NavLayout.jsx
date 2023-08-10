import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function NavLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
}
