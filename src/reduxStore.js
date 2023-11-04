import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./features/Recipes/recipesSlice";

const reduxStore = configureStore({
  reducer: {
    recipes: recipesSlice,
  },
});

export default reduxStore;
