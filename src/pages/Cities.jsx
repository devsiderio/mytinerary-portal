import { useState, useEffect, useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import CardCity from "../components/CardCity";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [reEffect, setReEffect] = useState(true);
  const [loading, setLoading] = useState(true);
  const text = useRef();

  useEffect(() => {
    setLoading(true);
    const searchText = text.current.value.trim();
    axios(apiUrl + "cities?city=" + searchText)
      .then((res) => {
        setCities(res.data.response);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setCities([]);
        } else {
          console.log(error);
        }
        setLoading(false);
      });
  }, [reEffect]);

  function handleFilter() {
    console.log(text.current.value);
    setReEffect(!reEffect);
  }

  return (
    <div className="flex flex-col m-8 grow items-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Cities</h1>

      <div className="mb-3">
        <input
          ref={text}
          type="search"
          className="w-full flex-auto rounded border border-solid border-indigo-400 bg-transparent px-4 py-2 leading-[1.6] text-blue-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-blue-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-blue-600 dark:text-neutral-200 dark:placeholder:text-blue-200 dark:focus:border-primary"
          name="text"
          placeholder="Search..."
          id="text"
          onKeyUp={handleFilter}
        />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center mt-10">
        {loading ? (
          <p className="text-2xl flex justify-center items-center h-[60vh] font-semibold text-indigo-600 mb-4 animate-bounce">
            Loading cities... 🌁
          </p>
        ) : cities.length > 0 ? (
          cities.map((each) => (
            <CardCity
              key={each._id}
              src={each.photo}
              alt={each.city}
              text={each.city}
              id={each._id}
            />
          ))
        ) : (
          <div className="flex-col flex justify-center items-center mt-10">
            <h2 className="text-4xl font-bold text-indigo-600 mb-4">
              We couldn't find that city! 🦆
            </h2>
            <p>Try searching something different 🏞️✨</p>
          </div>
        )}
      </div>
    </div>
  );
}
