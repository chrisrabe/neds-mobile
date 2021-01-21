import { createSlice } from "@reduxjs/toolkit";

const racingSlice = createSlice({
  name: "racing",
  initialState: {
    selectedCategory: undefined,
    races: [],
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setRaces(state, action) {
      state.races = action.payload;
    },
  },
});

export const { setSelectedCategory, setRaces } = racingSlice.actions;

export default racingSlice.reducer;
