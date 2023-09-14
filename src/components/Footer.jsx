import { Link as Anchor } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white h-48">
      <div className="container mx-auto flex justify-between items-center mt-20 py-10">
        <div className="ml-4">
          <Anchor to="/" className="text-1xl md:text-2xl font-bold">
            MyTinerary
          </Anchor>
        </div>

        <div className="flex gap-4 mr-4">
          <p className="text-1xl font-semi-bold">About Us</p>
          <p className="text-1xl font-semi-bold">Contact</p>
          <Anchor to="/cities" className="text-1xl font-semi-bold">
            Cities
          </Anchor>
        </div>
      </div>
    </footer>
  );
}
