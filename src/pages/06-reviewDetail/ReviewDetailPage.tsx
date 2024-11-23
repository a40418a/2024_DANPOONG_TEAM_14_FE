import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import emotion1_sel from "../../assets/images/emotion-1-sel.svg";
import emotion1_nsel from "../../assets/images/emotion-1-nsel.svg";
import emotion2_sel from "../../assets/images/emotion-2-sel.svg";
import emotion2_nsel from "../../assets/images/emotion-2-nsel.svg";
import emotion3_sel from "../../assets/images/emotion-3-sel.svg";
import emotion3_nsel from "../../assets/images/emotion-3-nsel.svg";
import { ReviewDetailItem } from "../../components/ReviewDetailItem";
import { CheckPopup } from "../../components/CheckPopup";
import { getMarketReview, Review } from "../../api/marketReviewApi";

export const ReviewDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [reviewInfo, setReviewInfo] = useState<Review[]>([]);
  const [placeName, setPlaceName] = useState<string>("");

  const [showPopup, setShowPopup] = useState(false);
  const [deletedIndex, setDeletedIndex] = useState<number | null>(null);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [usage, setUsage] = useState<string>("");
  const emotions = ["GOOD", "SOSO", "BAD"];

  // 비율 계산 함수
  const calculatePercentage = (score: string) => {
    const count = reviewInfo.filter((review) => review.score === score).length;
    return reviewInfo.length > 0
      ? Math.round((count / reviewInfo.length) * 100)
      : 0;
  };

  // 가장 높은 비율의 감정 찾기
  const getHighestEmotion = () => {
    const percentages = emotions.map((emotion) => ({
      emotion,
      percentage: calculatePercentage(emotion),
    }));
    percentages.sort((a, b) => b.percentage - a.percentage);
    return percentages[0]?.emotion || null;
  };

  const highestEmotion = getHighestEmotion();

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!id) return;

      try {
        const data = await getMarketReview(Number(id));
        console.log("Fetched market reviews:", data);
        setReviewInfo(data.data.reviews);
        setPlaceName(data.data.placeName);
      } catch (error) {
        console.error("Failed to fetch market reviews:", error);
        console.log("리뷰 정보를 불러오는데 실패했습니다.");
      }
    };

    fetchReviews();
  }, [id]);

  const handleDeleteReview = (index: number | null) => {
    setReviewInfo((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditReview = (index: number) => {
    console.log(reviewInfo[index]);
  };

  return (
    <div className="mt-20 mx-8 box-border">
      <div className="font-bold text-lg mb-4">{placeName}</div>
      {/* 후기 비율 */}
      <div className="flex flex-col border-b border-dong_deep_gray pb-6">
        <div className="font-bold">후기 {reviewInfo.length}명</div>
        <div className="flex gap-2 flex-col mt-3">
          {[
            {
              label: "GOOD",
              selImg: emotion1_sel,
              nselImg: emotion1_nsel,
              color: "bg-dong_secondary",
            },
            {
              label: "SOSO",
              selImg: emotion2_sel,
              nselImg: emotion2_nsel,
              color: "bg-dong_secondary",
            },
            {
              label: "BAD",
              selImg: emotion3_sel,
              nselImg: emotion3_nsel,
              color: "bg-dong_secondary",
            },
          ].map((item, index) => {
            const percentage = calculatePercentage(item.label);
            const isHighest = highestEmotion === item.label;
            return (
              <div key={index} className="flex items-center">
                <img
                  src={isHighest ? item.selImg : item.nselImg}
                  alt={item.label}
                  className="w-8"
                />
                <div className="h-8 w-full ml-3 bg-dong_light_gray rounded-lg relative">
                  <div
                    className={`absolute top-0 left-0 h-full ${item.color} rounded-lg`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-bold text-dong_dark_gray">
                  {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* 개별 후기 */}
      <div className="my-6 overflow-y-auto">
        <ul className="flex flex-col items-center gap-4">
          {reviewInfo.map((review, index) => (
            <li key={index}>
              <ReviewDetailItem
                key={index}
                user={review.userInfo.userName}
                userImg={review.userInfo.profileImageUrl}
                level={1} // 필요 시 API에서 해당 정보를 받아와 추가
                state={review.userInfo.userType}
                emotion={review.score}
                review={review.content}
                picture={review.imageUrl}
                comment={review.commentNum}
                like={review.likeNum}
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
