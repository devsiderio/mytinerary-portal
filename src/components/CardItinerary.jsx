import { useState } from "react";
import Activity from "../components/Activity";

export default function CardItinerary({
  src,
  alt,
  text,
  user,
  tags,
  duration,
  price,
  itineraryId,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col border border-gray-300 shadow-md bg-itineraries backdrop-blur-sm p-2 mt-4 rounded-xl w-full md:w-4/6 lg:w-3/6">
      <div className="flex flex-col items-center p-4 rounded-lg ">
        <p className="text-2xl mb-4 font-bold ">{text}</p>
        <img src={src} alt={alt} className="rounded-lg" />
      </div>
      <div className="border border-gray-300 shadow-md bg-transparent backdrop-blur-sm rounded-xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-around md:flex-grow mx-4">
            <div className="flex flex-col items-center">
              <img
                src={user.photo}
                alt={user.name}
                className="w-3/5 md:w-4/5 lg:w-full"
              />
              <p className="text-xl mt-1 font-semibold text-indigo-600">
                {user.name}
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-xl font-semibold text-indigo-600">Tags:</p>
              <div className="flex flex-col items-center">
                {tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-around md:flex-grow mt-1">
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold text-indigo-600">Duration:</p>
              <p>{Math.floor(duration / 60)} hour(s)</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold text-indigo-600">Price:</p>
              <p>{Math.ceil(price / 40)} pound(s)</p>
            </div>
          </div>
        </div>
      </div>
      <span
        onClick={() => setShow(!show)}
        className="shadow  bg-purple-500 hover:bg-purple-400 text-white focus:shadow-outline text-whitefocus:shadow-outline focus:outline-none font-bold my-4 py-2 px-4 w-9/12 md:w-[200px] rounded cursor-pointer text-center m-auto"
      >
        {show ? <p>Hide activities &uarr;</p> : <p>View activities &darr;</p>}
      </span>
      {show && <Activity itinerary_id={itineraryId} />}
    </div>
  );
}
