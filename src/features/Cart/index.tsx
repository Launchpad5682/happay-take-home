import { OrderItems, PriceDetails } from "../../common";

export const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-5">
      <OrderItems />
      <PriceDetails />
    </div>
  );
};
