import { Route, Routes } from "react-router-dom";
import { Layout } from "./common";
import { useCartCount } from "./hooks/useCartCount";
import { Home, OrderSummary } from "./routes";

export const App = () => {
  useCartCount();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="order-summary" element={<OrderSummary />} />
        </Route>
      </Routes>
    </>
  );
};
