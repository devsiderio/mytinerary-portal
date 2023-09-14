import { useState, useEffect, useRef } from "react";
import CardCity from "../components/CardCity";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities, setLoading } = city_actions;

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const isLoading = useSelector((store) => store.cities.loading);
  const [reEffect, setReEffect] = useState(true);
  const dispatch = useDispatch();
  const text = useRef();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(read_cities({ text: text.current?.value }));
  }, [reEffect]);
  function handleFilter() {
    dispatch(setLoading(true));
    console.log(text.current?.value);
    setReEffect(!reEffect);
  }

  return (
    <div className="bg-cities flex-grow">
      <div className="flex flex-col m-8 items-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Cities</h1>

        <div className="mb-3">
          <input
            ref={text}
            type="text"
            className="w-full flex-auto rounded border border-solid border-indigo-400 bg-white px-4 py-2 leading-[1.6] text-blue-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-blue-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-blue-600 dark:text-neutral-200 dark:placeholder:text-blue-200 dark:focus:border-primary"
            name="search"
            placeholder="Search..."
            id="search"
            onKeyUp={handleFilter}
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center mt-10">
          {isLoading ? (
            <p className="text-2xl flex justify-center items-center mt-40 font-semibold text-indigo-600 mb-4 animate-bounce">
              Loading cities... 🌁
            </p>
          ) : cities.length === 0 ? (
            <div className="flex-col flex justify-center items-center mt-10">
              <h2 className="text-4xl font-bold text-center text-indigo-600 mb-4">
                We couldn't find that city!
              </h2>
              <h2 className="text-6xl my-3">🦆</h2>
              <p className="text-center font-bold text-2xl p-4">
                Try searching something different...
              </p>
              <h4 className="text-4xl">🏞️✨</h4>
            </div>
          ) : (
            cities.map((each) => (
              <CardCity
                key={each._id}
                src={each.photo}
                alt={each.city}
                text={each.city}
                id={each._id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
