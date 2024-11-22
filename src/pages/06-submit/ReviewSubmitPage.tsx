import { useState, useEffect } from "react";

import classNames from "classnames";
import GalleryIcon from "../../assets/images/gallery.svg";

export const ReviewSubmitPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [keyboard, setKeyboard] = useState<number>(0);

  const options = [
    { id: "comfortable", label: "편했어요" },
    { id: "a_bit_uncomfortable", label: "조금 불편했어요" },
    { id: "uncomfortable", label: "불편했어요" },
  ];

  // 키보드 감지
  useEffect(() => {
    const handleSize = () => {
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.clientHeight;

      // 키보드가 올라가 있으면 화면 높이 변화 감지
      if (viewportHeight < fullHeight) {
        setKeyboard(fullHeight - viewportHeight); // 키보드 높이만큼 offset 설정
      } else {
        setKeyboard(0); // 키보드 내려가면 offset 초기화
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div className="flex flex-col mt-24 px-5">
      {/* 입력 부분 */}
      <div>
        <input
          type="text"
          className="mt-5 w-full placeholder-dong_black text-lg font-bold"
          placeholder="가게명을 입력해주세요."
        />
        <textarea
          className="mt-5 w-full h-52 placeholder-dong_deep_gray resize-none"
          placeholder="내용을 입력해주세요."
        />
      </div>

      {/* 하단 부분 */}
      <div
        className="fixed w-full transition-transform duration-300"
        style={{ bottom: `${keyboard}px` }}
      >
        {/* 버튼 */}
        <div className="flex gap-4 my-4">
          {options.map((option) => (
            <div
              key={option.id}
              className={classNames(
                "box-border w-28 p-2 text-center rounded-lg text-dong_white",
                {
                  "bg-dong_primary": selected === option.id,
                  "bg-dong_deep_gray": selected !== option.id,
                },
              )}
              onClick={() => setSelected(option.id)}
            >
              {option.label}
            </div>
          ))}
        </div>
        {/* 첨부파일 */}
        <div className="py-4 flex gap-2 items-center border-solid border-t-2 border-dong_light_gray">
          <img src={GalleryIcon} alt="gallery" />
          <span className="text-dong_deep_gray text-xs">0/10</span>
        </div>
      </div>
    </div>
  );
};
