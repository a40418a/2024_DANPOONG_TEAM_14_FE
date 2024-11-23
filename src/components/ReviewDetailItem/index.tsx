import { useEffect, useState } from "react";
import thumbIcon from "../../assets/images/thumbs-up.svg";
import commentIcon from "../../assets/images/message-circle.svg";
import emotion1_sel from "../../assets/images/emotion-1-sel.svg";
import emotion2_sel from "../../assets/images/emotion-2-sel.svg";
import emotion3_sel from "../../assets/images/emotion-3-sel.svg";
import axios from "axios";

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

  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  const [resolvedImages, setResolvedImages] = useState<string[]>([]);
  // 감정 이모지 맵핑
  const emotionMapping: { [key: string]: string } = {
    GOOD: emotion1_sel,
    SOSO: emotion2_sel,
    BAD: emotion3_sel,
  };

  // 사용자 유형 한국어 맵핑
  const userTypeMapping: { [key: string]: string } = {
    DISABLED: "장애인",
    ASSISTANCE_DOG: "안내견 보호자",
    ELDERLY: "노약자",
    CHILD: "어린이",
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = await Promise.all(
          picture.map(async (url) => {
            // URL 유효성 검사 및 변환
            const validUrl = url.startsWith("http")
              ? url
              : `https://api.circleme.site${url}`;
            const response = await axios.get(
              `https://api.circleme.site/api/file/get?fileUrl=${encodeURIComponent(
                validUrl,
              )}`,
              {
                withCredentials: true, // 쿠키 기반 인증 활성화
                responseType: "blob", // Blob 데이터로 이미지 가져오기
              },
            );

            // Blob 데이터를 Object URL로 변환
            const imageBlob = new Blob([response.data]);
            const imageUrl = URL.createObjectURL(imageBlob);
            return imageUrl;
          }),
        );
        setResolvedImages(imageUrls);
      } catch (error) {
        console.error("Failed to fetch review images:", error);

        // 기본 이미지를 설정하거나 빈 상태를 처리
        setResolvedImages([]);
      }
    };

    fetchImages();
  }, [picture]);

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
            <img
              src={userImg}
              alt="userImg"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* 글 */}
          <div className="flex flex-col ml-3">
            <div className="flex ">
              <div className="font-bold">{user}</div>
              <div className="text-dong_light_black font-bold ml-1">
                LV.{level}
              </div>
            </div>
            <div className="font-bold text-dong_primary">
              {userTypeMapping[state] || "유형 없음"}
            </div>
          </div>
        </div>
        {/* 섹션2 */}
        <div className="flex">
          <div className="w-12 h-7 bg-dong_secondary rounded-md flex justify-center items-center">
            <img
              src={emotionMapping[emotion]}
              alt={emotion}
              className="w-5 h-5"
            />
          </div>
          <div className="text-xs ml-3 w-64">
            {review.length > 50 ? `${review.slice(0, 50)}...` : review}
          </div>
        </div>
        {/* 섹션3 */}
        <div className="font-bold underline text-dong_light_black text-xs">
          자세히 보기
        </div>
        {/* 섹션4 */}
        <div className="relative flex items-end">
          {/* 사진 리스트 */}
          {resolvedImages && resolvedImages.length > 0 ? (
            <ul className="flex gap-3">
              {resolvedImages.slice(0, 3).map((img, idx) => (
                <li
                  key={idx}
                  className="w-24 h-24 bg-dong_light_gray rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`review-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-xs text-dong_light_black">사진 없음</span>
          )}
        </div>
        <div className="absolute bottom-2 right-2 flex items-center gap-2">
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
