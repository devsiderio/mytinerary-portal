import { createReducer } from "@reduxjs/toolkit";
import activity_actions from "../actions/activities.js";
const { read_activities } = activity_actions;

const initial_state = {
  activities: [],
};

const activity_reducer = createReducer(initial_state, (builder) =>
  builder.addCase(read_activities.fulfilled, (state, action) => {
    let new_state = {
      ...state,
      activities: action.payload.activities,
    };
    return new_state;
  })
);

export default activity_reducer;
