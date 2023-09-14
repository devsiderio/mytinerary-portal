import { useState, useEffect, useRef } from "react";
import { Link as Anchor } from "react-router-dom";
import Display from "./Display";
import Label from "./Label";
import ProfileIcon from "./ProfileIcon";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;

export default function NavBar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  const menuIcon = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleCloseMenu = (event) => {
      const isClickInside = menuIcon.current.contains(event.target);
      if (!isClickInside) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleCloseMenu);
    return () => document.removeEventListener("click", handleCloseMenu);
  }, []);

  const handleSignOut = () => {
    dispatch(signout());
  };

  const options = [
    { to: "/", title: "Home" },
    { to: "/cities", title: "Cities" },
    isAuthenticated
      ? {
          title: "Sign out",
          icon: <ProfileIcon />,
          backgroundColor: "red",
          color: "white",
          onClick: handleSignOut,
        }
      : {
          to: "/signin",
          title: "Sign In",
          icon: <ProfileIcon />,
          backgroundColor: "#4F46E5",
          color: "white",
        },
  ];

  return (
    <header className="bg-navbar">
      <div className="flex mx-auto flex-row justify-between max-w-7xl items-center py-4 px-4 md:px-8 lg:px-16 xl:px-32">
        <svg
          onClick={() => setShow(!show)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          ref={menuIcon}
          className="flex md:hidden w-[50px] h-[50px] bg-transparent p-[5px] rounded-xl cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {show && <Display options={options} />}
        <div className="w-full justify-center flex md:justify-between items-center">
          <Anchor
            to="/"
            className="text-white text-3xl font-bold mb-4 mt-4 md:mt-0 md:text-4xl md:mb-0"
          >
            MyTinerary
          </Anchor>
          <Label options={options} className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
}
