import { Outlet } from "react-router-dom";
import { Header } from "../../molecules/Header";

type Props = {};

export const Layout = ({}: Props) => {
  return (
    <div className="flex flex-col h-screen w-full overflow-y-auto bg-white box-border">
      <Header />
      <div className="flex w-full h-full overflow-y-auto max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
