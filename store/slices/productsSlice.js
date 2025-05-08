// import { productsList } from "../../constants/productsList";

import { createSlice } from "@reduxjs/toolkit";

// const initialState = productsList;

// export default function productsReducer(state = [], action) {
//   return state;
// }

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    fetchProductsError(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong!";
    },
    updateAllProducts(state, action) {
      state.list = action.payload;
      state.loading = false;
      state.error = "";
    },
  },
});

export default slice.reducer;
export const { fetchProducts, fetchProductsError, updateAllProducts } =
  slice.actions;
