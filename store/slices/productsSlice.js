// import { productsList } from "../../constants/productsList";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = productsList;

// export default function productsReducer(state = [], action) {
//   return state;
// }

export const fetchProductsData = createAsyncThunk(
  "products/fetchProductsItem",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    // fetchProducts(state) {
    //   state.loading = true;
    // },
    // fetchProductsError(state, action) {
    //   state.loading = false;
    //   state.error = action.payload || "Something went wrong!";
    // },
    // updateAllProducts(state, action) {
    //   state.list = action.payload;
    //   state.loading = false;
    //   state.error = "";
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.error = "";
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong!";
      });
  },
});

export default slice.reducer;
export const { fetchProducts, fetchProductsError, updateAllProducts } =
  slice.actions;

export const getAllProducts = (state) => state.products.list;
export const getProductLoadingState = (state) => state.products.loading;
export const getProductError = (state) => state.products.error;

// export const fetchProductsData = () => (dispatch) => {
//   dispatch(fetchProducts());
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => dispatch(updateAllProducts(data)))
//     .catch((e) => dispatch(fetchProductsError()));
// };
