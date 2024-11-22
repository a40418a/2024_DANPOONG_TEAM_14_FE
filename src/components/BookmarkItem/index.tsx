export const BookmarkItem = ({
  name,
  type,
  onClick,
  isChecked,
  onCheck,
}: {
  name: string;
  type: string;
  onClick: () => void;
  isChecked: boolean;
  onCheck: (checked: boolean) => void;
}) => {
  return (
    <div className="flex items-center gap-4  box-border">
      <span
        className={`w-5 h-5 border-solid border-2 border-dong_light_gray rounded-full transition-all duration-200 ${
          isChecked ? "bg-dong_secondary" : ""
        }`}
        onClick={() => onCheck(!isChecked)}
      />
      <div className="w-[19rem] h-32 border-solid border-2 border-dong_light_gray rounded-[1.25rem] flex relative gap-4 items-center p-3 box-border">
        <div className="w-24 h-24 bg-dong_light_gray rounded-lg "></div>
        <div>
          <div>
            <span className="text-sm  font-bold">{name}</span>
          </div>
          <div>
            <span className="text-xs  text-dong_primary">{type}</span>
          </div>
        </div>
        <div className="absolute top-3 right-3" onClick={onClick}>
          <span className="text-dong_light_black text-[0.625rem] font-bold underline">
            삭제
          </span>
        </div>
      </div>
    </div>
  );
};
