type Props = {
  original_price: number;
  final_price: number;
};

export const DiscountBadge = ({ original_price, final_price }: Props) => {
  return (
    <div className="absolute h-8 w-20 bg-black -right-1 top-10 text-white flex justify-center items-center rounded-l-2xl shadow-xl">
      {Math.ceil(original_price - final_price / 100) + "% off"}
    </div>
  );
};
