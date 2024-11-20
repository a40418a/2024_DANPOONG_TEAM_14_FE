import { useState } from "react";

import { BookmarkItem } from "../../components/BookmarkItem";
import { ActionButtons } from "../../components/ActionButtons";
import { CheckPopup } from "../../components/CheckPopup";

export const BookmarkPage = () => {
  const [bookmarkStore, setBookmarkStore] = useState([
    {
      name: "스타벅스 본점",
      type: "카페",
    },
    {
      name: "스타벅스1",
      type: "카페",
    },
    {
      name: "스타벅스2",
      type: "카페",
    },
    {
      name: "스타벅스3",
      type: "카페",
    },
  ]);

  const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [deletedIndex, setDeletedIndex] = useState<number | null>(null);

  const handleCheck = (index: number, checked: boolean) => {
    setCheckedIndexes((prev) =>
      checked ? [...prev, index] : prev.filter((i) => i !== index),
    );
  };

  const handleDeleteBookmark = (index: number) => {
    if (index === -1) {
      setBookmarkStore([]);
      setCheckedIndexes([]);
    } else {
      setBookmarkStore((prev) => prev.filter((_, i) => i !== index));
      setCheckedIndexes((prev) =>
        prev.filter((i) => i !== index).map((i) => (i > index ? i - 1 : i)),
      );
      setDeletedIndex(null);
    }
  };

  const handleDeleteChecked = () => {
    setBookmarkStore((prev) =>
      prev.filter((_, i) => !checkedIndexes.includes(i)),
    );
    setCheckedIndexes([]);
  };

  const handlePopupClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const buttonText = e.currentTarget.textContent;
    if (buttonText === "예") {
      if (deletedIndex !== null) {
        handleDeleteBookmark(deletedIndex);
      } else {
        handleDeleteChecked();
      }
    } else if (buttonText === "아니요") {
      setDeletedIndex(null);
    }
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="pt-[7.375rem] flex items-center gap-40 mb-5">
        <div>
          <span className="text-lg font-bold leading-5">내 북마크 장소</span>
        </div>
        <div
          onClick={() => {
            setDeletedIndex(-1);
            if (bookmarkStore.length > 0) {
              setShowPopup(true);
            }
          }}
        >
          <span className="text-xs font-bold text-dong_light_gray underline">
            전체 삭제
          </span>
        </div>
      </div>
      <div className="mb-[10rem]">
        <ul className="flex flex-col gap-2">
          {bookmarkStore.map((bookmark, index) => (
            <li key={index}>
              <BookmarkItem
                name={bookmark.name}
                type={bookmark.type}
                onClick={() => {
                  setDeletedIndex(index);
                  setShowPopup(true);
                }}
                isChecked={checkedIndexes.includes(index)}
                onCheck={(checked) => handleCheck(index, checked)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[24.563rem] h-[3.75rem] text-center fixed bottom-[3.625rem]">
        <ActionButtons
          onClick={() => {
            if (checkedIndexes.length > 0) {
              setShowPopup(true);
            }
          }}
          disabled={false}
        >
          선택 삭제하기
        </ActionButtons>
      </div>
      {showPopup && (
        <div className="w-full h-screen fixed flex justify-center items-center">
          <CheckPopup
            usage="delete"
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              handlePopupClick(e)
            }
          />
        </div>
      )}
    </div>
  );
};
