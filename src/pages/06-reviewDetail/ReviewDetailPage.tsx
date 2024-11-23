// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import emotion1_sel from "../../assets/images/emotion-1-sel.svg";
// import emotion1_nsel from "../../assets/images/emotion-1-nsel.svg";
// import emotion2_sel from "../../assets/images/emotion-2-sel.svg";
import emotion2_nsel from "../../assets/images/emotion-2-nsel.svg";
// import emotion3_sel from "../../assets/images/emotion-3-sel.svg";
import emotion3_nsel from "../../assets/images/emotion-3-nsel.svg";
import { ReviewDetailItem } from "../../components/ReviewDetailItem";
import { CheckPopup } from "../../components/CheckPopup";

export const ReviewDetailPage = () => {
  // const { id } = useParams<{ id: string }>();

  const [reviewInfo, setReviewInfo] = useState([
    {
      user: "사용자1",
      userImg: "",
      level: 1,
      state: "장애인",
      emotion: "emotion1",
      review: "편했어요",
      picture: [],
      comment: 0,
      like: 0,
    },
    {
      user: "사용자2",
      userImg: "",
      level: 2,
      state: "노인",
      emotion: "emotion2",
      review: "편했어요",
      picture: [],
      comment: 0,
      like: 0,
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
    <div className="mt-20 mx-8 box-border">
      {/* 후기 비율 */}
      <div className="flex flex-col border-b border-dong_deep_gray pb-6">
        <div className="font-bold">후기 12명</div>
        <div className="flex gap-2 flex-col mt-3">
          <div className="flex">
            <img src={emotion1_sel} alt="emotion1" className="w-8" />
            <div className="h-8 w-full ml-3 bg-dong_light_gray rounded-lg"></div>
          </div>
          <div className="flex">
            <img src={emotion2_nsel} alt="emotion1" className="w-8" />
            <div className="h-8 w-full ml-3 bg-dong_light_gray rounded-lg"></div>
          </div>
          <div className="flex">
            <img src={emotion3_nsel} alt="emotion1" className="w-8" />
            <div className="h-8 w-full ml-3 bg-dong_light_gray rounded-lg"></div>
          </div>
        </div>
      </div>
      {/* 개별 후기 */}
      <div className="my-6 overflow-y-auto">
        <ul className="flex flex-col items-center gap-4">
          {reviewInfo.map((review, index) => (
            <li key={index}>
              <ReviewDetailItem
                key={index}
                user={review.user}
                userImg={review.userImg}
                level={review.level}
                state={review.state}
                emotion={review.emotion}
                review={review.review}
                picture={review.picture}
                comment={review.comment}
                like={review.like}
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
