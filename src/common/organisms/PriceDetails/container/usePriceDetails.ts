import { useEffect, useState } from "react";
import { CartItem } from "../../../../features/Cart/cartSlice";
import { useAppSelector } from "../../../../hooks/redux-hooks";

interface ProductTotal extends CartItem {
  productTotal: number;
}

interface PriceDetails {
  cart: Array<ProductTotal>;
  totalFinalPrice: string;
  totalSaving: string;
  deliveryFee: number;
  taxes: number;
  toPay: number;
}

type params = {
  deliveryFee?: number;
  taxes?: number;
};

export const usePriceDetails = ({ deliveryFee = 5, taxes = 2 }: params) => {
  const cart = useAppSelector((store) => store.cart.cart);
  const [priceDetails, setPriceDetails] = useState<PriceDetails>({
    cart: [],
    totalFinalPrice: "0",
    totalSaving: "0",
    deliveryFee,
    taxes,
    toPay: 0,
  });

  useEffect(() => {
    if (cart) {
      const productTotalCart: Array<ProductTotal> = cart.reduce(
        (prev: any, curr: CartItem) => [
          ...prev,
          {
            ...curr,
            final_price: parseFloat(String(curr.final_price)).toFixed(2),
            productTotal: parseFloat(
              String(curr.quantity * curr.final_price)
            ).toFixed(2),
          },
        ],
        []
      );

      const totalFinalPrice = parseFloat(
        String(
          cart.reduce(
            (prev, curr) => prev + curr.quantity * curr.final_price,
            0
          )
        )
      ).toFixed(2);

      const totalSaving = parseFloat(
        String(
          cart.reduce(
            (prev, curr) =>
              prev +
              (curr.original_price
                ? (curr.original_price - curr.final_price) * curr.quantity
                : 0),
            0
          )
        )
      ).toFixed(2);

      const toPay = Number(totalFinalPrice) + deliveryFee + taxes;

      setPriceDetails((prev) => ({
        ...prev,
        cart: productTotalCart,
        totalFinalPrice,
        totalSaving,
        toPay,
      }));
    }
  }, [cart, deliveryFee, taxes]);

  return {
    priceDetails,
  };
};
