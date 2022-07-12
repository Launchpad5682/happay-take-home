import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  final_price: number;
  original_price: number;
  quantity: number;
}

export interface CartState {
  cart: Array<CartItem>;
  count: number;
}

const initialState: CartState = {
  cart: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, final_price, original_price } = action.payload;
      const product = { id, name, final_price, original_price, quantity: 1 };
      state.cart = [...state.cart, product];
    },
    removeFromCart: (state, action) => {},
    increaseItemQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart[index].quantity = state.cart[index].quantity + 1;
    },
    decreaseItemQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cart[index].quantity === 1) {
        // remove
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
      } else {
        state.cart[index].quantity = state.cart[index].quantity - 1;
      }
    },
    setCartCount: (state, action) => {
      state.count = action.payload.count;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  setCartCount
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
