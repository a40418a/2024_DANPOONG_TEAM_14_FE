import thumbIcon from "../../assets/images/thumbs-up.svg";
import commentIcon from "../../assets/images/message-circle.svg";

export const ReviewDetailItem = ({
  user,
  userImg,
  level,
  state,
  emotion,
  review,
  picture,
  comment,
  like,
  onClick,
}: {
  user: string;
  userImg: string;
  level: number;
  state: string;
  emotion: string;
  review: string;
  picture: string[];
  comment: number;
  like: number;

  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-full h-auto border-b box-border relative pb-6">
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
      <div className="flex flex-col p-3 w-full items-start gap-3">
        {/* 섹션1 */}
        <div className="flex">
          {/* 사용자프로필이미지 */}
          <div className="rounded-full w-12 h-12 bg-dong_light_gray">
            <img src={userImg} alt="userImg" />
          </div>
          {/* 글 */}
          <div className="flex flex-col ml-3">
            <div className="flex ">
              <div className="font-bold">{user}</div>
              <div className="text-dong_light_black font-bold ml-1">
                LV.{level}
              </div>
            </div>
            <div className="font-bold text-dong_primary">{state}</div>
          </div>
        </div>
        {/* 섹션2 */}
        <div className="flex">
          <div className="w-12 h-7 bg-dong_secondary rounded-md flex justify-center items-center">
            <img src={emotion} alt="emoji" className="w-5 h-5" />
          </div>
          <div className="text-xs ml-3">
            {review.length > 56 ? `${review.slice(0, 56)}...` : review}
          </div>
        </div>
        {/* 섹션3 */}
        <div className="font-bold underline text-dong_light_black text-xs">
          자세히 보기
        </div>
        {/* 섹션4 */}
        <div className="relative flex items-end">
          <ul className="flex gap-3">
            <li className="w-24 h-24 bg-dong_light_gray rounded-lg"></li>
            <li className="w-24 h-24 bg-dong_light_gray rounded-lg"></li>
            <li className="w-24 h-24 bg-dong_light_gray rounded-lg"></li>
          </ul>
          <div className="absolute bottom-0 right-0 flex items-center gap-2">
            <div className="flex flex-col items-center">
              <img src={thumbIcon} alt="thumb" className="w-5 h-5" />
              <span className="text-xs text-dong_light_black">{like}</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={commentIcon} alt="comment" className="w-5 h-5" />
              <span className="text-xs text-dong_light_black">{comment}</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col p-3">
        <div className="flex gap-3 mb-3 items-center">
          <div>
            <span className="text-sm leading-5 font-bold">{user}</span>
          </div>
          <div className="w-16 h-6 rounded-md bg-dong_primary text-center flex items-center justify-center">
            <div>
              <span className="text-dong_white text-[0.625rem] font-bold">
                {state}
              </span>
            </div>
          </div>
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
        {picture && (
          <div className="">
            <ul className="flex gap-[0.548rem]">
              <li className="w-24 h-24 bg-dong_light_gray rounded-lg"></li>
              <li className="w-24 h-24 bg-dong_light_gray rounded-lg"></li>
            </ul>
          </div>
        )}
      </div> */}
    </div>
  );
};
