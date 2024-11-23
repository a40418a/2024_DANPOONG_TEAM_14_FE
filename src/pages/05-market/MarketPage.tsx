import selectedBookmark from "../../assets/images/bookmark_selected.svg";
import nonSelectedBookmark from "../../assets/images/bookmark_nonselected.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButtons } from "../../components/ActionButtons";

export const MarketPage = () => {
  const navigate = useNavigate();
  const [bookmarkSelected, setBookmarkSelected] = useState(false);
  return (
    <div className="mt-24 mx-9 flex flex-col">
      {/* 상단 선택 부분 */}
      <div className="flex items-center justify-between">
        {/* 이모지 */}
        <div>
          <img className="w-6 h-6" src="추후추가예정" alt="emotion" />
        </div>
        {/* 북마크 */}
        <div
          onClick={() => {
            setBookmarkSelected(!bookmarkSelected);
          }}
        >
          <img
            className="w-6 h-6 "
            src={bookmarkSelected ? selectedBookmark : nonSelectedBookmark}
            alt="bookmark"
          />
        </div>
      </div>
      {/* 카카오 웹사이트 */}
      <div className="mt-5 bg-purple-300 w-full h-[56vh]"></div>
      {/* 하단 선택 부분 */}
      {/* 리뷰 작성하기 */}
      <div className="fixed bottom-5">
        <ActionButtons
          onClick={() => {
            navigate("/circle-me/submit");
          }}
          disabled={false}
        >
          리뷰 작성하기
        </ActionButtons>
      </div>
    </div>
  );
};
