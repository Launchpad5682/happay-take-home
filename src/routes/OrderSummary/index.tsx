import { NavLink } from "react-router-dom";
import { TextUtility } from "../../common";
import { Cart } from "../../features/Cart";
import { useAppSelector } from "../../hooks/redux-hooks";
import { BiArrowBack } from "react-icons/bi";

export const OrderSummary = () => {
  const count = useAppSelector((store) => store.cart.count);
  return (
    <div className="flex flex-col gap-5 w-full max-w-7xl h-full p-5">
      <NavLink to="/" className="flex items-center gap-2">
        <BiArrowBack />
        Back to Home
      </NavLink>
      {count ? (
        <TextUtility size="xl" textStyle="bold">
          {"Order Summary (" + count + " items)"}
        </TextUtility>
      ) : (
        <TextUtility size="xl" textStyle="bold">
          Empty Cart
        </TextUtility>
      )}
      <Cart />
    </div>
  );
};
