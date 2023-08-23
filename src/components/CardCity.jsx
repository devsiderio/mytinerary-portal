import { Link as Anchor } from "react-router-dom";

export default function CardCity({ src, alt, text, id }) {
  return (
    <Anchor
      to={"/city/" + id}
      className="w-5/5 md:w-2/5 lg:w-1/4 xl:w-1/5 flex flex-col items-center p-1 m-1 rounded-lg "
    >
      <img src={src} alt={alt} className="rounded-lg" />
      <p className="text-2xl mt-4 font-semibold text-indigo-600">{text}</p>
    </Anchor>
  );
}
