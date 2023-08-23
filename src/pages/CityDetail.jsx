import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import CardCityDetail from "../components/CardCityDetail";

export default function CityDetail() {
  const id = useParams();
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios(apiUrl + "cities/" + id.city_id)
      .then((res) => {
        setCity(res.data.response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col m-8 grow items-center justify-center">
      <CardCityDetail
        photo={city.photo}
        city={city.city}
        country={city.country}
        descr={city.description}
      />
    </div>
  );
}
