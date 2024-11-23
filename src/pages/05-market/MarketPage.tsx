import selectedBookmark from "../../assets/images/bookmark_selected.svg";
import nonSelectedBookmark from "../../assets/images/bookmark_nonselected.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ActionButtons } from "../../components/ActionButtons";
import { MarketInfo } from "../../components/MarketInfo";

export const MarketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookmarkSelected, setBookmarkSelected] = useState(false);

  // 전달받은 장소 정보
  const place = location.state?.place;

  if (!place) {
    return <p>선택된 장소 정보가 없습니다.</p>;
  }

  return (
    <div className="mt-24 mx-9 flex flex-col box-border">
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
      <div className="mt-5 w-full h-[56vh]">
        <MarketInfo placeUrl={`https://place.map.kakao.com/${place.id}`} />
      </div>
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
