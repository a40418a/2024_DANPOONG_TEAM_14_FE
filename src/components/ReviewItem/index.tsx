export const ReviewItem = ({
  store,
  state,
  review,
  isImage,
  onClick,
}: {
  store: string;
  state: string;
  review: string;
  isImage: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-[20.563rem] h-auto border-dong_light_gray border-solid border-2 rounded-[1.25rem] box-border relative">
      <div className="absolute flex gap-1 top-3 right-3">
        <div onClick={onClick}>
          <span className="text-[0.625rem] text-dong_light_black font-bold underline">
            수정
          </span>
        </div>
        <div onClick={onClick}>
          <span className="text-[0.625rem] text-dong_light_black font-bold underline">
            삭제
          </span>
        </div>
      </div>
      <div className="flex flex-col p-3 mt-3">
        <div className="flex gap-3 mb-3 items-center">
          <div>
            <span className="text-sm leading-5 font-bold">{store}</span>
          </div>
          <img src={state} className="w-6 h-6" alt="state" />
        </div>
        <div className="w-4/5 h-auto mb-[0.625rem]">
          <span className="text-[0.625rem] font-medium inline-block leading-4">
            {review.length > 56 ? `${review.slice(0, 56)}...` : review}
          </span>
        </div>
        <div className="mb-[0.625rem]">
          <span className="text-[0.625rem] text-dong_light_black font-bold underline">
            자세히 보기
          </span>
        </div>
        {isImage && (
          <div className="">
            <ul className="flex gap-[0.548rem]">
              <li className="w-24 h-24 bg-dong_light_gray rounded-lg"></li>
              <li className="w-24 h-24 bg-dong_light_gray rounded-lg"></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
