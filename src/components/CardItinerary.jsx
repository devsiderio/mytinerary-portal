// import itinerary_actions from "../store/actions/itineraries";
// const { read_itineraries_from_city } = itinerary_actions;

export default function CardCity({ src, alt, text, tags, duration, price }) {
  // const itineraries = useSelector(
  //   (store) => store.itineraries.itineraries_from_city
  // );
  return (
    <div className="flex flex-col items-center p-1 m-1 rounded-lg ">
      <p className="text-2xl mt-1 font-semibold text-indigo-600">{text}</p>
      <img src={src} alt={alt} className="rounded-lg" />
      <div className="flex flex-col items-center">
        {/* <img src={read_itineraries_from_city({ admin_id: photo })} alt="name" />
        <p className="text-xl mt-1 font-semibold text-indigo-600">
          User: {read_itineraries_from_city({ admin_id: name })}
        </p> */}
        <p className="text-xl mt-1 font-semibold text-indigo-600">
          Tags: {tags + ""}
        </p>
        <p className="text-xl mt-1 font-semibold text-indigo-600">
          Duration: {Math.floor(duration / 60)} hours
        </p>
        <p className="text-xl mt-1 font-semibold text-indigo-600">
          Price: {Math.round(price / 40)} pounds
        </p>
      </div>
    </div>
  );
}
