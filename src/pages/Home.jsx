import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import axios from "axios";

export default function Home() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("/cities.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="grow flex-1 p-4 md:p-8 flex-col items-center justify-center max-w-7xl w-full px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="self-stretch justify-between items-center inline-flex mb-8 md:mb-16">
        <div className="w-full md:w-[742px] flex-col justify-center items-start gap-10 inline-flex">
          <div className="self-stretch text-zinc-900 text-4xl md:text-5xl font-bold flex">
            Find the perfect destination
          </div>
          <div className="w-full md:w-[628px] text-zinc-900 text-opacity-60 text-lg md:text-2xl font-semibold flex">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </div>
          <div className="w-full md:w-[346px] px-5 py-4 bg-indigo-600 rounded-lg justify-center items-center gap-4 inline-flex">
            <Link to="/cities">
              <div className="text-white text-xl font-semibold">View More</div>
            </Link>
          </div>
        </div>
      </div>
      {show ? (
        <input
          onClick={() => setShow(!show)}
          type="button"
          value="hide"
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
        />
      ) : (
        <input
          onClick={() => setShow(!show)}
          type="button"
          value="show"
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
        />
      )}
      {show ? (
        <Carousel data={data} />
      ) : (
        <h1 className="text-[24px] text-white">
          click arriba para ver carousel
        </h1>
      )}
    </main>
  );
}
