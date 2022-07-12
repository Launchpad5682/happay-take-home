type Props = {
  size: "sm" | "md" | "lg" | "xl";
  textStyle: "bold" | "semibold" | "light";
  children: string | number;
  color?: "green" | "black";
};

export const TextUtility = ({
  size,
  textStyle,
  color = "black",
  children,
}: Props) => {
  return (
    <span
      className={`text-${size} font-${textStyle} h-fit ${
        color === "black" ? `text-${color}` : `text-green-500`
      }`}
    >
      {children}
    </span>
  );
};
