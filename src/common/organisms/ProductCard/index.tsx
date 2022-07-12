import { CartItem } from "../../../features/Cart/cartSlice";
import { DiscountBadge } from "../../atoms/DiscountBadge";
import { FlatButton } from "../../atoms/FlatButton";
import { QuantityButton } from "../../molecules/QuantityButton";

type Props = {
  id: number;
  img_url: string;
  name: string;
  description: string;
  original_price: number;
  final_price: number;
  increaseQuantityHandler: Function;
  decreaseQuantityHandler: Function;
  addToCartHandler: Function;
  inCartDetail: {
    inCart: boolean;
    product: null | CartItem;
  };
};

export const ProductCard = ({
  id,
  img_url,
  name,
  description,
  original_price,
  final_price,
  increaseQuantityHandler,
  decreaseQuantityHandler,
  addToCartHandler,
  inCartDetail,
}: Props) => {
  return (
    <div key={id} className="flex flex-col w-full gap-8">
      <div className="h-fit w-full shadow-xl shadow-slate-300 rounded-xl relative">
        <img src={img_url} alt={`${name}-${id}`} />
        {original_price && (
          <DiscountBadge
            original_price={original_price}
            final_price={final_price}
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="capitalize font-bold text-xl">{name}</span>
          <span className="flex items-center ml-auto gap-2">
            {original_price && (
              <span className="line-through text-gray-700 font-light text-xl">
                $ {original_price}
              </span>
            )}
            <span className="font-bold text-xl">$ {final_price}</span>
          </span>
        </div>
        <p className="font-light w-4/5 text-gray-500">{description}</p>
      </div>
      {inCartDetail.inCart ? (
        <QuantityButton
          quantity={inCartDetail?.product?.quantity ?? 0}
          decreaseHandler={() => decreaseQuantityHandler(id)}
          increaseHandler={() => increaseQuantityHandler(id)}
        />
      ) : (
        <FlatButton clickHandler={() => addToCartHandler(id)}>
          Add to cart
        </FlatButton>
      )}
    </div>
  );
};
