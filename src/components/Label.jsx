import { Link as Anchor } from "react-router-dom";

export default function Label({ options }) {
  return (
    <div className="hidden md:flex ms-5 gap-2 rounded-xl">
      {options.map((each) => (
        <Anchor
          key={each.to}
          to={each.to}
          className="text-xl md:text-2xl font-semibold bg-transparent rounded-xl flex justify-center items-center mx-1 py-2 px-3"
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
