import { Link as Anchor } from "react-router-dom";
export default function CardCity({ photo, country, city, descr }) {
  return (
    <div className="w-4/5 md:w-full flex flex-col items-center p-1 m-1 rounded-lg">
      <img src={photo} alt={city} className="rounded-lg" />
      <p className="text-3xl md:text-4xl lg:text-6xl mt-4 font-bold text-indigo-600">
        {city}
      </p>
      <p className="text-1xl md:text-2xl lg:text-3xl max-w-4xl font-bold my-4">
        {country}
      </p>
      <p>{descr}</p>
      <Anchor
        to="/cities"
        className="text-indigo-600 hover:bg-indigo-400 hover:text-white text-1xl font-bold mb-4 mt-4 md:mt-4 border border-solid rounded border-indigo-600 px-4 py-2"
      >
        ↩️ Back to Cities
      </Anchor>
      <p className="text-1xl md:text-2xl lg:text-3xl max-w-4xl my-4">
        Under construction 🏗️
      </p>
    </div>
  );
}
