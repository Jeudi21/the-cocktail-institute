import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    updateSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { updateSearch } = recipesSlice.actions;

export default recipesSlice.reducer;
