import { Link as Anchor } from "react-router-dom";

export default function Label({ options }) {
  const handleSignInClick = (onClick) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="hidden md:flex ms-5 gap-2 rounded-xl">
      {options.map((each) => (
        <Anchor
          key={each.title}
          to={each.to}
          onClick={() => handleSignInClick(each.onClick)}
          className="text-xl text-white font-semibold bg-transparent backdrop-blur-sm rounded-xl flex justify-center items-center mx-1 py-1 px-3 border border-gray-300 shadow-md bg-slate-100"
          style={{
            backgroundColor: each.backgroundColor,
            color: each.color,
          }}
        >
          {each.icon}
          {each.title}
        </Anchor>
      ))}
    </div>
  );
}
