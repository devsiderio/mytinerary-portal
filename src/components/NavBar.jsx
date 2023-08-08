import { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function NavBar() {
  let [show, setShow] = useState(true);
  return (
    <header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[50px] h-[50px] bg-white p-[5px] rounded-xl cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {show ? (
        <div className="flex mx-auto flex-col md:flex-row justify-between max-w-7xl items-center py-4 px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="text-zinc-900 text-2xl md:text-4xl font-bold mb-4 md:mb-0">
            MyTinerary
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch md:ml-8 gap-4">
            <Anchor
              to="/"
              className="text-zinc-900 my-auto text-xl md:text-2xl font-bold"
            >
              Home
            </Anchor>
            <Anchor
              to="/cities"
              className="text-zinc-900 my-auto text-xl md:text-2xl font-bold"
            >
              Cities
            </Anchor>

            <div className="px-4 py-2 bg-indigo-600 rounded-[10px] flex items-center gap-2.5">
              <div className="w-6 h-6 relative">
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
              <Anchor
                to="/login"
                className="text-white text-xl md:text-2xl font-bold"
              >
                Login
              </Anchor>
            </div>
            <div className="px-4 py-2 bg-green-600 rounded-[10px] flex items-center gap-2.5">
              <div className="w-6 h-6 relative">
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
              <Anchor
                to="/signup"
                className="text-white text-xl md:text-2xl font-bold"
              >
                Sign up
              </Anchor>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
