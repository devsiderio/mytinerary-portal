import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  console.log(children);
  return (
    <div className="w-full min-h-screen pt-8 bg-white flex flex-col mx-auto max-w-7xl px-4">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
