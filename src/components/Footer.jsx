export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center mt-20 py-10">
        <div>
          <p className="text-2xl font-bold">MyTinerary</p>
        </div>

        <div className="flex gap-4">
          <p className="text-1xl font-semi-bold">About Us</p>
          <p className="text-1xl font-semi-bold">Contact</p>
        </div>
      </div>
    </footer>
  );
}
