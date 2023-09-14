import { Link as Anchor } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItinerary from "../components/CardItinerary";
import BackToCities from "./BackToCities";
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries_from_city } = itinerary_actions;

export default function CardCityDetail({ photo, country, city, descr, id }) {
  const [show, setShow] = useState(false);
  const [loadingCityInfo, setLoadingCityInfo] = useState(true);
  const itineraries = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoadingCityInfo(true);
    dispatch(read_itineraries_from_city({ city_id: id })).then(() => {
      setLoadingCityInfo(false);
    });
  }, [id, dispatch]);
  // console.log(itineraries);
  return (
    <div className="bg-details rounded-lg w-full flex-grow">
      <div className="w-full flex flex-col items-center my-10">
        {loadingCityInfo ? (
          <p className="text-2xl font-semibold text-indigo-600 mt-72">
            Loading city details... 🌆
          </p>
        ) : (
          <>
            <img src={photo} alt={city} className="rounded-lg w-11/12" />
            <p className="text-3xl md:text-4xl lg:text-6xl mt-10 font-bold text-indigo-600">
              {city}
            </p>
            <p className="text-1xl md:text-2xl lg:text-3xl max-w-4xl font-bold my-4">
              {country}
            </p>
            <p className="w-11/12 text-center">{descr}</p>
            <BackToCities />
            {itineraries.length === 0 ? (
              <div className="flex-col flex justify-center items-center">
                <h2 className="text-4xl font-bold text-center text-indigo-600 mb-4 mt-24">
                  Itineraries
                </h2>
                <span
                  onClick={() => setShow(!show)}
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer w-[200px] text-center"
                >
                  {show ? <p>Hide &uarr;</p> : <p>View &darr;</p>}
                </span>
                {show && (
                  <>
                    {" "}
                    <h2 className="text-6xl my-8">🦆</h2>
                    <h4 className="text-4xl font-semibold text-white">
                      Ooops!
                    </h4>
                    <p className="text-2xl text-center font-bold text-white p-4">
                      There are no itineraries (yet) for this city 🏞️✨
                    </p>
                  </>
                )}
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-bold text-center text-indigo-600 mb-4 mt-24">
                  Itineraries
                </h2>
                <span
                  onClick={() => setShow(!show)}
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer w-[200px] text-center"
                >
                  {show ? <p>Hide &uarr;</p> : <p>View &darr;</p>}
                </span>
                {show &&
                  itineraries.map((each) => (
                    <CardItinerary
                      key={each._id}
                      src={each.photo}
                      alt={each.name}
                      text={each.name}
                      user={each.city_id.admin_id}
                      tags={each.tags}
                      duration={each.duration}
                      price={each.price}
                      itineraryId={each._id}
                    />
                  ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
