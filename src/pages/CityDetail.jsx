import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CityDetail() {
  const [data, setData] = useState({});
  const { city } = useParams();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("/cities.json")
        .then((response) => {
          const data = response.data.find((c) => c.city === city);
          setData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [data]);

  return (
    <div className="flex flex-col m-8 grow items-center justify-center">
      <h1 className="text-2xl font-bold text-indigo-600">{city}</h1>
      <p className="max-w-4xl mt-4">{data.description}</p>
    </div>
  );
}
