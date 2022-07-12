type Props = {
  imgURL?: string;
};

export const Avatar = ({
  imgURL = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
}: Props) => {
  return (
    <div className="rounded-full flex w-10 h-10">
      <img src={imgURL} alt="avatar" className="rounded-full object-cover" />
    </div>
  );
};
