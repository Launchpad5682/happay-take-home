import { AiOutlineStar } from "react-icons/ai";
import { ProductListing } from "../../features/ProductListing";

export const Home = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto items-center">
      <div className="flex flex-col p-5 gap-3">
        <span className="text-2xl font-bold">Most Popular</span>
        <span className="flex text-xl justify-center items-center gap-2">
          <div className="w-full h-0.5 bg-sky-600 rounded-lg"></div>
          <span className="p-2 bg-gray-200 rounded-full text-sky-600">
            <AiOutlineStar />
          </span>
          <div className="w-full h-0.5 bg-sky-600 rounded-lg"></div>
        </span>
      </div>
      <ProductListing />
    </div>
  );
};
