import { useAppDispatch, useAppSelector } from "./redux-hooks";
import {
  addToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/Cart/cartSlice";
import { useEffect } from "react";
import { setProducts } from "../features/ProductListing/productsSlice";
import axios from "axios";

export const useCart = () => {
  const products = useAppSelector((store) => store.products.products);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.cart.cart);

  const productInCart = (id: number) => {
    const product = cart.find((product) => product.id === id);
    return product
      ? { product, inCart: true }
      : { product: null, inCart: false };
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("./data.json");
        dispatch(setProducts({ products: response.data }));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const addToCartHandler = (id: number) => {
    const product = products.find((product) => product.id === id);
    dispatch(addToCart({ ...product }));
  };

  const increaseQuantityHandler = (id: number) => {
    dispatch(increaseItemQuantity({ id }));
  };

  const decreaseQuantityHandler = (id: number) => {
    dispatch(decreaseItemQuantity({ id }));
  };

  return {
    productInCart,
    products,
    addToCartHandler,
    increaseQuantityHandler,
    decreaseQuantityHandler,
  };
};
