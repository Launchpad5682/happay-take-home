import { MouseEventHandler, ReactNode } from "react";

type Props = {
  children: string | ReactNode;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
  color?: "sky" | "gray";
  rounded: "left" | "right" | "both";
  width?: "full" | "1/2";
  padding?: "small" | "big";
};

export const SolidButton = ({
  children,
  clickHandler,
  color = "sky",
  rounded,
  width = "full",
  padding = "big",
}: Props) => {
  return (
    <button
      className={`flex h-full justify-center items-center ${
        color === "sky" ? `bg-${color}-600` : `bg-${color}-800`
      } text-white flex ${
        padding === "small" ? "p-1" : "p-2"
      } w-${width} text-lg font-bold ${
        rounded === "left"
          ? "rounded-l-md"
          : rounded === "right"
          ? "rounded-r-md"
          : "rounded-md"
      } border-2 border-${color}-600`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
