import { Link as Anchor } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_carousel } = city_actions;

export default function Home() {
  const carousel = useSelector((store) => store.cities.carousel);
  const dispatch = useDispatch();

  useEffect(() => {
    if (carousel.length === 0) {
      dispatch(read_carousel());
    }
  }, []);

  return (
    <main className="grow items-center justify-center max-w-7xl px-4 m-auto my-16">
      <div className="md:min-h-[300px] px-4 my-16">
        <h1 className="text-5xl md:text-6xl font-bold flex text-indigo-600 mb-10 justify-center m-auto">
          MyTinerary
        </h1>
        <p className="w-9/12 md:w-full text-zinc-900 justify-center text-center m-auto text-opacity-60 text-lg md:text-2xl font-semibold flex mb-10">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
        <p className="w-full text-zinc-900 justify-center m-auto text-lg md:text-4xl font-semibold flex mb-8 md:mb-16">
          🤩🏞️✨
        </p>
      </div>
      <div className="self-stretch items-center flex-col my-16">
        <div className="flex-col md:flex-col mb-16">
          <div className="self-stretch text-zinc-900 text-2xl md:text-3xl font-bold flex justify-center">
            Popular MyTineraries!
          </div>
          <div className="flex justify-center items-center h-96">
            {carousel.length === 0 ? (
              <p className="text-2xl font-semibold text-indigo-600 animate-bounce">
                Loading carousel... 🎠
              </p>
            ) : (
              <Carousel data={carousel} />
            )}
          </div>
        </div>
        <div className="w-full flex-col justify-center gap-10 inline-flex mt-16">
          <div className="self-stretch text-zinc-900 justify-center text-3xl md:text-4xl font-bold flex">
            Find the perfect destination
          </div>

          <div className="w-full justify-center text-zinc-900 text-center text-opacity-60 text-lg md:text-2xl font-semibold flex">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </div>
          <Anchor
            to="/cities"
            className="w-[200px] md:w-[346px] px-5 py-4 bg-indigo-600 rounded-lg justify-center m-auto gap-4 inline-flex"
          >
            <div className="text-white text-xl font-semibold">View More</div>
          </Anchor>
        </div>
      </div>
    </main>
  );
}
