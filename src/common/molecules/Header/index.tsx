import { Logo } from "../../atoms/Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar } from "../../atoms/Avatar";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux-hooks";

export const Header = () => {
  const count = useAppSelector((store) => store.cart.count);
  const location = useLocation();

  return (
    <div className="flex h-20 w-full bg-white">
      <div className="flex items-center justify-between h-full w-full px-5">
        <Logo />
      </div>
      <div className="flex gap-5 items-center px-5">
        {location.pathname === "/" && (
          <NavLink to="/order-summary" className="relative text-3xl">
            {count > 0 && (
              <div className="absolute h-6 w-6 bottom-5 left-5 rounded-full bg-red-600 flex justify-center items-center text-sm text-white">
                {count > 9 ? "9+" : count}
              </div>
            )}
            <AiOutlineShoppingCart />
          </NavLink>
        )}
        <Avatar />
      </div>
    </div>
  );
};
