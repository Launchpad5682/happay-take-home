export function Logo() {
  return (
    <span className="h-8 w-full flex items-center gap-2 cursor-pointer">
      <img
        src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
        alt="happay-logo"
        className="h-8"
      />
      <span className="text-sky-600 font-semibold text-2xl">Happay</span>
    </span>
  );
}
