import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  description: string;
  final_price: number;
  original_price: number;
  img_url: string;
}

interface ProductsState {
  products: Array<Product>;
}

const initialState: ProductsState = { products: [] };

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload.products];
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
