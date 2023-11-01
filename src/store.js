import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./features/Recipes/recipesSlice";

const store = configureStore({
  reducer: {
    recipes: recipesSlice,
  },
});

export default store;
