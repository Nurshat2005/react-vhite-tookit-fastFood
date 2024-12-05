import { configureStore } from "@reduxjs/toolkit";
import SliceFood from "./reducer/FoodSlice";

export const store = configureStore({
  reducer: {
    main: SliceFood,
  },
});
