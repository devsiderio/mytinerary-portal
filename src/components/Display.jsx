import { Link as Anchor } from "react-router-dom";

export default function Display({ options }) {
  return (
    <div className="ms-5 absolute top-[70px] left-[10px] gap-2 flex flex-col bg-transparent p-2 rounded-xl">
      {options.map((each) => (
        <Anchor
          key={each.to}
          to={each.to}
          className="text-xl bg-yellow-400 text-black font-semibold rounded-xl flex justify-center items-center mx-1 py-2 px-3"
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
