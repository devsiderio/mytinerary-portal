import axios from "axios";
import apiUrl from "../../apiUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

const read_activities = createAsyncThunk("read_activities", async (obj) => {
  try {
    let data = await axios(
      apiUrl + "activities?itinerary_id=" + obj.itinerary_id
    );
    console.log(data);
    return {
      activities: data.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      activities: [],
    };
  }
});

const activity_actions = { read_activities };
export default activity_actions;
