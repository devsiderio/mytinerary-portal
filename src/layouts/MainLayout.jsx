import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  console.log(children);
  return (
    <div className="w-full min-h-screen justify-center pt-8 bg-white flex flex-col mx-auto">
      <NavBar className="flex" />
      <main className="flex-1">{children}</main>
      <Footer className="w-full flex flex-col h-48 bg-black" />
    </div>
  );
}
