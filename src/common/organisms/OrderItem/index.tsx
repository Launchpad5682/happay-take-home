import { useCart } from "../../../hooks/useCart";
import { TextUtility } from "../../atoms/TextUtility";
import { QuantityButton } from "../../molecules/QuantityButton";

type Props = {
  index: number;
  id: number;
  name: string;
  quantity: number;
};

export const OrderItem = ({ index, id, name, quantity }: Props) => {
  const { increaseQuantityHandler, decreaseQuantityHandler } = useCart();

  return (
    <div className="grid grid-cols-3 h-10 justify-evenly items-center px-2">
      <TextUtility size="lg" textStyle="light">
        {index + 1}
      </TextUtility>
      <TextUtility size="lg" textStyle="light">
        {name}
      </TextUtility>
      <div className="flex h-full">
        <QuantityButton
          quantity={quantity}
          padding="small"
          color="gray"
          decreaseHandler={() => decreaseQuantityHandler(id)}
          increaseHandler={() => increaseQuantityHandler(id)}
        />
      </div>
    </div>
  );
};
