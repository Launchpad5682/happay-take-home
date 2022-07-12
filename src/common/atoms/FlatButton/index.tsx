import { MouseEventHandler } from "react";

type Props = {
  children: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

export const FlatButton = ({ children, clickHandler }: Props) => {
  return (
    <button
      className="text-sky-600 border-2 border-sky-600 rounded-md font-bold text-lg py-4 hover:bg-sky-600 hover:text-white"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
