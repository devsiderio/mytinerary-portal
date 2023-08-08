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
    <div>
      <h1>{city}</h1>
      <p>{data.description}</p>
    </div>
  );
}
