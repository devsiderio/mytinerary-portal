import axios from "axios";
import apiUrl from "../../apiUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

const read_carousel = createAsyncThunk("read_carousel", async () => {
  try {
    let data = await axios(apiUrl + "cities/carousel");
    return { carousel: data.data.data_carousel };
  } catch (error) {
    console.log(error);
    return { carousel: [] };
  }
});

const read_cities = createAsyncThunk(
  "read_cities",
  async (obj, { dispatch }) => {
    try {
      const searchText = obj.text.trim();
      dispatch(setLoading(true));

      let data = await axios(apiUrl + "cities?city=" + searchText);
      dispatch(setLoading(false));

      return { cities: data.data.response };
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        return { cities: [] };
      } else {
        return { cities: [] };
      }
    }
  }
);

const setLoading = (loading) => {
  return {
    type: "set_loading",
    payload: loading,
  };
};

const read_city = createAsyncThunk("read_city", async (obj) => {
  try {
    let data = await axios(apiUrl + "cities/" + obj.id);
    return { city: data.data.response };
  } catch (error) {
    console.log(error);
    return { city: {} };
  }
});

const city_actions = {
  read_carousel,
  read_cities,
  read_city,
  setLoading,
};
export default city_actions;
