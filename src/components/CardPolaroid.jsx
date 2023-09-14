import { Link as Anchor } from "react-router-dom";

export default function CardPolaroid({ src, alt, text, id }) {
  return (
    <Anchor
      to={"/city/" + id}
      className="w-3/5 md:w-2/5 flex flex-col items-center p-2 m-1 rounded-lg border border-gray-300 shadow-md bg-transparent backdrop-blur-sm"
    >
      <img src={src} alt={alt} className="rounded-lg" />
      <p className="text-2xl mt-1 font-semibold text-indigo-600">{text}</p>
    </Anchor>
  );
}
