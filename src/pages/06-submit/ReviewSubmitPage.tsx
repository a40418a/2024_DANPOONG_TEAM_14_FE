import { useState, useEffect } from "react";

import classNames from "classnames";
import GalleryIcon from "../../assets/images/gallery.svg";
import Xicon from "../../assets/images/x.svg";

export const ReviewSubmitPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectImg, setSelectImg] = useState<File[]>([]);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  const options = [
    { id: "comfortable", label: "편했어요" },
    { id: "a_bit_uncomfortable", label: "조금 불편했어요" },
    { id: "uncomfortable", label: "불편했어요" },
  ];

  const openGallery = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.onchange = () => {
      const files = Array.from(input.files || []);
      if (files.length + selectImg.length > 3) {
        alert("최대 3개의 이미지만 선택할 수 있습니다.");
        return;
      }
      setSelectImg((prev) => [...prev, ...files]);
    };
    input.click();
  };

  const removeImage = (index: number) => {
    setSelectImg((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const handleViewportChange = () => {
      if (window.visualViewport) {
        const offset = window.visualViewport.height - window.innerHeight;
        setKeyboardHeight(offset > 0 ? offset : 0); // 키보드 높이 설정
      }
    };

    // Visual Viewport 이벤트 리스너 추가
    window.visualViewport?.addEventListener("resize", handleViewportChange);

    // 초기 상태 설정
    handleViewportChange();

    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        handleViewportChange,
      );
    };
  }, []);

  return (
    <div className="flex flex-col mt-24 px-5 box-border">
      {/* 입력 부분 */}
      <div>
        <input
          type="text"
          className="mt-5 w-full placeholder-dong_black text-lg font-bold"
          placeholder="가게명을 입력해주세요."
        />
        <textarea
          className="mt-5 w-full h-48 placeholder-dong_light_black resize-none"
          placeholder="내용을 입력해주세요."
        />
        {/* 선택된 이미지 미리보기 */}
        <div className="mt-5 flex gap-3">
          {selectImg.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt={`selected-${index}`}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <button
                className="absolute top-1 right-1 w-5 h-5 "
                onClick={() => removeImage(index)}
              >
                <img src={Xicon} alt="remove" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 부분 */}
      <div
        className="fixed w-full transition-transform duration-300"
        style={{ bottom: `${keyboardHeight}px` }}
      >
        {/* 버튼 */}
        <div className="flex gap-3 my-4">
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
        <div className="py-4 flex gap-2 items-center border-solid border-t-[0.0625rem] border-dong_light_gray">
          <img src={GalleryIcon} alt="gallery" onClick={openGallery} />
          <span className="text-dong_deep_gray text-xs">
            {selectImg.length}/3
          </span>
        </div>
      </div>
    </div>
  );
};
