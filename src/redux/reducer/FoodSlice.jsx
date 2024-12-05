import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: [],
  features:JSON.parse(localStorage.getItem("features"))||[]
};

export const SliceFood = createSlice({
  name: "Food",
  initialState,
  reducers: {
    GetProduct(state, action) {
      state.food = action.payload;
    },
    AddFeatures(state, action) {
      let res = (state.features = [...state.features, action.payload]);
      localStorage.setItem("features", JSON.stringify(res));
    },
    DeleteFeatures(state, action) {
      let del = (state.features = state.features.filter(
        (el) => el._id !== action.payload
      ));
      localStorage.setItem("features", JSON.stringify(del));
    },
    increment(state, action) {
      let inc = (state.features = state.features.map((el) =>
        el._id === action.payload._id
          ? { ...el, quantity: el.quantity + 1 }
          : el
      ));
      localStorage.setItem("features", JSON.stringify(inc));
    },
    decrement(state, action) {
      let dec = (state.features = state.features.map((el) =>
        el._id === action.payload._id
          ? { ...el, quantity: el.quantity > 1?el.quantity-1:el.quantity }
          : el
      ));
      localStorage.setItem("features", JSON.stringify(dec));
    },
  },
});
export const { GetProduct, AddFeatures, DeleteFeatures, increment ,decrement} = SliceFood.actions;
export default SliceFood.reducer;
