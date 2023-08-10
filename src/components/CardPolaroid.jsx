import { Link as Anchor } from "react-router-dom";

export default function CardPolaroid({ src, alt, country, city }) {
  return (
    <Anchor
      to={"/city-detail/" + city}
      className="w-3/5 md:w-2/5 flex flex-col items-center p-1 m-1 rounded-lg"
    >
      <img src={src} alt={alt} className="rounded-lg" />
      <p className="text-2xl mt-4 font-semibold text-indigo-600">{country}</p>
    </Anchor>
  );
}
