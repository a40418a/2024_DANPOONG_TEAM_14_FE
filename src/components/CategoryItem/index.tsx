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
      className={`w-20 h-7 rounded-lg ${isClicked ? "bg-dong_primary" : "bg-dong_deep_gray"} text-center flex items-center justify-center`}
      onClick={onClick}
    >
      <span className="text-xs text-dong_white">{children}</span>
    </div>
  );
};
