export const CategoryItem = ({
  children,
  onClick,
  isClicked,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isClicked: boolean;
}) => {
  return (
    <div
      className={`w-[4.5rem] h-[1.688rem] rounded-lg ${isClicked ? "bg-dong_primary" : "bg-dong_deep_gray"} text-center flex items-center justify-center`}
      onClick={onClick}
    >
      <span className="text-[0.625rem] font-bold text-dong_white">
        {children}
      </span>
    </div>
  );
};
