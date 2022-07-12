import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { Divider } from "../../atoms/Divider";
import { TextUtility } from "../../atoms/TextUtility";
import { OrderItem } from "../OrderItem";

export const OrderItems = () => {
  const cart = useAppSelector((store) => store.cart.cart);

  return (
    <div className="flex flex-col h-full w-full border-2 border-gray-400 rounded-md gap-5 p-5">
      <div className="grid grid-cols-3 px-2">
        <TextUtility size="lg" textStyle="light">
          S. NO.
        </TextUtility>
        <TextUtility size="lg" textStyle="light">
          ITEMS
        </TextUtility>
        <TextUtility size="lg" textStyle="light">
          QTY
        </TextUtility>
      </div>
      <Divider />
      {cart.map(({ id, name, quantity }, index) => (
        <OrderItem
          index={index}
          id={id}
          name={name}
          quantity={quantity}
          key={`order-${id}`}
        />
      ))}
      <Divider />
      <NavLink className="text-sky-600 font-bold text-lg" to="/">
        + Add more items
      </NavLink>
    </div>
  );
};
