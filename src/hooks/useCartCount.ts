import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { setCartCount } from "../features/Cart/cartSlice";

export const useCartCount = () => {
  const cart = useAppSelector((store) => store.cart.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart.length) {
      const count = cart.reduce(
        (prev, curr) => Number(curr.quantity) + prev,
        0
      );

      dispatch(setCartCount({ count }));
    } else {
      const count = 0;
      dispatch(setCartCount({ count }));
    }
  }, [cart, dispatch]);
};
