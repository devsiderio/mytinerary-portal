import NavBar from "../components/NavBar";

export default function NavLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-red-500 ">
      <NavBar />
      {children}
    </div>
  );
}
