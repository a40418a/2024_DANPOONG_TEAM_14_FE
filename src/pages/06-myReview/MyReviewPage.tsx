import { useState, useEffect } from "react";

import { ReviewItem } from "../../components/ReviewItem";
import { CheckPopup } from "../../components/CheckPopup";

export const MyReviewPage = () => {
  const [reviewInfo, setReviewInfo] = useState([
    {
      store: "소고기 전문 식당",
      state: "편했어요",
      review:
        "고기도 너무 맛있고 전반적으로 만족스럽습니다.불편함이 적었던 식당입니다!",
      isImage: true,
    },
    {
      store: "소고기 전문 식당",
      state: "편했어요",
      review:
        "고기도 너무 맛있고 전반적으로 만족스럽습니다.불편함이 적었던 식당입니다!",
      isImage: false,
    },
    {
      store: "소고기 전문 식당",
      state: "편했어요",
      review:
        "고기도 너무 맛있고 전반적으로 만족스럽습니다.불편함이 적었던 식당입니다!",
      isImage: true,
    },
    {
      store: "소고기 전문 식당",
      state: "편했어요",
      review:
        "고기도 너무 맛있고 전반적으로 만족스럽습니다.불편함이 적었던 식당입니다!",
      isImage: true,
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const [deletedIndex, setDeletedIndex] = useState<number | null>(null);

  const [editIndex, setEditIndex] = useState<number>(-1);

  const [usage, setUsage] = useState<string>("");

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  const handleDeleteReview = (index: number | null) => {
    setReviewInfo((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditReview = (index: number) => {
    console.log(reviewInfo[index]);
  };

  return (
    <div className="mt-24 px-8">
      <div className="mb-5">
        <span className="text-lg font-bold">내 작성 리뷰</span>
      </div>
      <div className="pb-4 overflow-y-auto">
        <ul className="flex flex-col items-center gap-4">
          {reviewInfo.map((review, index) => (
            <li key={index}>
              <ReviewItem
                key={index}
                store={review.store}
                state={review.state}
                review={review.review}
                isImage={review.isImage}
                onClick={(e) => {
                  console.log(e.currentTarget.textContent);
                  if (e.currentTarget.textContent === "수정") {
                    setEditIndex(index);
                    setUsage("edit");
                  } else if (e.currentTarget.textContent === "삭제") {
                    setDeletedIndex(index);
                    setUsage("delete");
                  }
                  setShowPopup(true);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <CheckPopup
            usage={usage}
            onClick={(e) => {
              if (usage === "edit") {
                if (e.currentTarget.textContent === "수정") {
                  handleEditReview(editIndex);
                  setShowPopup(false);
                } else if (e.currentTarget.textContent === "취소") {
                  setEditIndex(-1);
                  setShowPopup(false);
                }
              } else if (usage === "delete") {
                if (e.currentTarget.textContent === "예") {
                  handleDeleteReview(deletedIndex);
                  setShowPopup(false);
                } else if (e.currentTarget.textContent === "아니요") {
                  setDeletedIndex(null);
                  setShowPopup(false);
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
};
