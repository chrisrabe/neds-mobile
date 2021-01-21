import { createSlice } from "@reduxjs/toolkit";
import { getNextRaces } from "@neds/api";

const racingSlice = createSlice({
  name: "racing",
  initialState: {
    isLoading: false,
    selectedCategory: undefined,
    races: [],
    error: undefined,
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    racesLoading(state) {
      state.isLoading = true;
    },
    racesReceived(state, action) {
      state.isLoading = false;
      state.error = undefined;
      state.races = action.payload;
    },
    racesError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.races = undefined;
    },
  },
});

const { racesError, racesLoading, racesReceived } = racingSlice.actions;

export const { setSelectedCategory } = racingSlice.actions;

export const fetchRaces = () => async (dispatch) => {
  dispatch(racesLoading());
  try {
    const data = await getNextRaces();
    dispatch(racesReceived(data));
  } catch (e) {
    dispatch(racesError(e));
  }
};

export default racingSlice.reducer;
