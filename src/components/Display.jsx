import { Link as Anchor } from "react-router-dom";

export default function Display({ options }) {
  const handleDisplayClick = (onClick) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="ms-5 absolute top-[70px] left-[10px] gap-2 flex flex-col bg-transparent p-2 rounded-xl">
      {options.map((each) => (
        <Anchor
          key={each.title}
          to={each.to}
          onClick={() => handleDisplayClick(each.onClick)}
          className="text-xl text-black font-semibold rounded-xl flex justify-center items-center mx-1 py-1 px-3 border border-gray-300 shadow-md bg-transparent backdrop-blur-sm"
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
