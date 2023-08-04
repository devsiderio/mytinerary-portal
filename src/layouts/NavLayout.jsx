import NavBar from "../components/NavBar";

export default function NavLayout({ children }) {
  return (
    <div className="w-full min-h-screen justify-center pt-8 bg-white flex flex-col mx-auto">
      <NavBar className="flex" />
      <main className="flex-1">{children}</main>
    </div>
  );
}
