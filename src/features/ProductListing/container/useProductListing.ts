import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import {
  addToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../Cart/cartSlice";
import { setProducts } from "../productsSlice";

export const useProductListing = () => {
  const products = useAppSelector((store) => store.products.products);
  const cart = useAppSelector((store) => store.cart.cart);
  const dispatch = useAppDispatch();

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
    products,
    productInCart,
    addToCartHandler,
    increaseQuantityHandler,
    decreaseQuantityHandler,
  };
};
