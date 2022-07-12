import { MouseEventHandler } from "react";
import { SolidButton } from "../../atoms/SolidButton";

type Props = {
  quantity: number | string;
  decreaseHandler: MouseEventHandler<HTMLButtonElement>;
  increaseHandler: MouseEventHandler<HTMLButtonElement>;
  color?: "sky" | "gray";
  padding?: "small" | "big";
};

export const QuantityButton = ({
  quantity,
  decreaseHandler,
  increaseHandler,
  color = "sky",
  padding = "big",
}: Props) => {
  return (
    <div className="flex w-full h-full items-center rounded-md">
      <SolidButton
        clickHandler={decreaseHandler}
        rounded="left"
        color={color}
        padding={padding}
      >
        -
      </SolidButton>
      <div
        className={`flex w-full h-full justify-center items-center text-lg border-y-2 border-${color}-600`}
      >
        {quantity}
      </div>
      <SolidButton
        clickHandler={increaseHandler}
        rounded="right"
        color={color}
        padding={padding}
      >
        +
      </SolidButton>
    </div>
  );
};
