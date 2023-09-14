import { useEffect, useState } from "react";
import activity_actions from "../store/actions/activities";
const { read_activities } = activity_actions;
import { useDispatch } from "react-redux";

export default function Activity({ itinerary_id }) {
  const dispatch = useDispatch();
  const [localActivities, setLocalActivities] = useState([]);

  useEffect(() => {
    dispatch(read_activities({ itinerary_id })).then((response) => {
      setLocalActivities(response.payload.activities);
    });
  }, [itinerary_id, dispatch]);

  return (
    <div className="mb-4 flex flex-col md:flex-row justify-center items-center bg-transparent backdrop-blur-sm rounded-md">
      {localActivities?.map((each) => (
        <div
          key={each._id}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col rounded-xl p-2 m-2 border border-gray-300 shadow-md bg-transparent backdrop-blur-sm"
        >
          <img
            className="w-full h-[130px] object-cover rounded-t-xl"
            src={each.photo}
            alt={each.name}
          />
          <p className="text-lg font-bold mt-2 text-center">{each.name}</p>
        </div>
      ))}
    </div>
  );
}
