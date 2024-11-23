import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

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
    <div className="flex flex-col items-center relative h-screen">
      <div className="w-full mt-24 flex items-center justify-between mb-5 px-10">
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
          <span className="text-xs font-bold text-dong_light_black underline">
            전체 삭제
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto w-full px-8">
        <ul className="flex flex-col gap-4">
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
      <div className="h-[3.75rem] text-center fixed bottom-5">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
