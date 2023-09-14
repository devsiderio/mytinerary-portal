import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_city } = city_actions;
import CardCityDetail from "../components/CardCityDetail";

export default function CityDetail() {
  //const id = useParams();
  const { city_id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.cities.city);

  useEffect(() => {
    dispatch(read_city({ id: city_id }));
  }, []);

  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <CardCityDetail
        photo={city.photo}
        city={city.city}
        country={city.country}
        descr={city.description}
        id={city_id}
      />
    </div>
  );
}
