import { useState, useEffect } from "react";

import classNames from "classnames";
import GalleryIcon from "../../assets/images/gallery.svg";
import Xicon from "../../assets/images/x.svg";
import emotion1_sel from "../../assets/images/emotion-1-sel.svg";
import emotion1_nsel from "../../assets/images/emotion-1-nsel.svg";
import emotion2_sel from "../../assets/images/emotion-2-sel.svg";
import emotion2_nsel from "../../assets/images/emotion-2-nsel.svg";
import emotion3_sel from "../../assets/images/emotion-3-sel.svg";
import emotion3_nsel from "../../assets/images/emotion-3-nsel.svg";

export const ReviewSubmitPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectImg, setSelectImg] = useState<File[]>([]);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  const options = [
    { id: "1", sel: emotion1_sel, nsel: emotion1_nsel },
    { id: "2", sel: emotion2_sel, nsel: emotion2_nsel },
    { id: "3", sel: emotion3_sel, nsel: emotion3_nsel },
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
      <div className="box-border">
        <input
          type="text"
          className="mt-5 w-full placeholder-dong_black text-lg font-bold"
          placeholder="제목을 입력해주세요."
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
        <div className="flex gap-5 my-4">
          {options.map((option) => (
            <div
              key={option.id}
              className={classNames(
                "box-border text-center w-24 h-14 rounded-xl flex justify-center items-center",
                {
                  "bg-dong_secondary": selected === option.id,
                  "bg-dong_light_gray": selected !== option.id,
                },
              )}
              onClick={() => setSelected(option.id)}
            >
              <img
                src={selected === option.id ? option.sel : option.nsel}
                alt={`emotion-${option.id}`}
                className="w-full h-4/5"
              />
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
