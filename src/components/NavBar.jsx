export default function NavBar() {
  return (
    <header className="self-stretch justify-between items-center flex">
      <div className="text-zinc-900 text-[32px] font-bold ">My Tinerary</div>
      <div className="justify-center items-center gap-8 flex">
        <div className="text-zinc-900 text-2xl font-bold">Home</div>
        <div className="text-zinc-900 text-2xl font-bold">Cities</div>
        <div className="px-8 py-4 bg-indigo-600 rounded-[10px] justify-center items-center gap-2.5 flex">
          <div className="w-[21px] h-5 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className="text-white text-2xl font-bold">Login</div>
        </div>
      </div>
    </header>
  );
}
