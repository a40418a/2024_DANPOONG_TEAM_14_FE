import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import Xicon from "../../assets/images/x.svg";

import { CheckPopup } from "../../components/CheckPopup";
import { useStoreType } from "../../hooks/useStoreType";
import { useGetHeaderTitle } from "../../hooks/useGetHeaderTitle";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const storeType = useStoreType();
  const headerTitle = useGetHeaderTitle();

  const [showPopup, setShowPopup] = useState(false);
  const [xClick, setXClick] = useState("");

  // 검색 실행 함수
  const handleSearch = () => {
    if (!xClick.trim()) {
      alert("검색어를 입력하세요!");
      return;
    }
    // 검색어를 /circle-me 페이지의 state로 전달하며 이동
    navigate("/circle-me", { state: { keyword: xClick } });
  };

  const handlePopupClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const buttonText = e.currentTarget.textContent;
    if (buttonText === "예") {
      navigate("/circle-me/review");
    } else if (buttonText === "아니요") {
      setShowPopup(false);
    }
    setShowPopup(false); // 모달 닫기
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  if (
    location.pathname === "/accept" ||
    location.pathname.includes("/types") ||
    location.pathname.includes("/category") ||
    location.pathname === "/circle-me/bookmark" ||
    location.pathname.includes("/market")
  ) {
    return (
      <div className="w-screen h-20 m-auto bg-dong_white">
        <div className="flex relative justify-center items-center pt-7">
          <div
            className="absolute left-7 top-7"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoIosArrowBack className="text-dong_light_black text-xl " />
          </div>
          {location.pathname === "/accept" && (
            <div>
              <span className="text-sm text-dong_light_black font-bold">
                약관 동의
              </span>
            </div>
          )}
          {location.pathname.includes("/category") && (
            <div>
              <span className="text-sm text-dong_light_black font-bold">
                {storeType}
              </span>
            </div>
          )}
          {location.pathname === "/circle-me/bookmark" && (
            <div>
              <span className="text-sm text-dong_light_black font-bold">
                내 북마크 장소
              </span>
            </div>
          )}
          {(location.pathname === "/types" ||
            location.pathname.includes("market")) && (
            <div className="flex absolute right-7 top-7">
              <div className="flex items-center">
                <span className="text-sm font-bold text-dong_light_black">
                  Kakao
                </span>
              </div>
              <div className="w-6 h-6 bg-dong_light_black rounded-full flex items-center justify-center ml-2">
                <div>
                  <FaUser className="text-dong_white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (location.pathname === "/circle-me") {
    return (
      <div className="w-screen h-20 flex flex-col items-center m-auto bg-dong_white">
        <div className="w-[21.25rem] h-14  relative mt-10 flex mb-4">
          <div className="w-full h-full">
            <input
              type="text"
              className="box-border border-solid border-2 h-full px-10 placeholder-dong_light_black placeholder-bold rounded-lg text-sm"
              placeholder="가게명/동네를 입력하세요"
              value={xClick}
              onChange={(e) => setXClick(e.target.value)} // 상태 업데이트
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }} // 엔터 키 이벤트
            />
          </div>
          <div
            className="absolute top-1/2  right-7 transform -translate-y-1/2 "
            onClick={() => setXClick("")}
          >
            <img src={Xicon} />
          </div>
        </div>
      </div>
    );
  }

  if (
    location.pathname.includes("/circle-me/profile") ||
    location.pathname.includes("/review")
  ) {
    return (
      <div className="w-screen h-20 flex justify-center items-center bg-dong_white box-border">
        <div className="flex flex-col items-center fixed left-7 top-7 gap-1">
          <div>
            <IoIosArrowBack
              className="text-dong_light_black text-xl"
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
        </div>
        <div>
          <span className="text-dong_light_black text-sm font-bold">
            {headerTitle}
          </span>
        </div>
        {location.pathname === "/circle-me/profile/edit" ? (
          <div
            onClick={() => {
              navigate("./circle-me/profile");
            }}
          >
            <span className="text-base text-dong_light_black font-bold fixed right-7 top-7">
              저장
            </span>
          </div>
        ) : location.pathname.includes("/review") ? (
          <div></div>
        ) : (
          <div
            className="flex flex-col justify-center fixed right-7 top-7"
            onClick={() => {
              navigate("/circle-me/profile/edit");
            }}
          >
            <div>
              <CiSettings className="text-dong_light_black w-[1.375rem] h-[1.375rem]" />
            </div>
            <div>
              <span className="text-dong_light_black text-xs font-bold">
                수정
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (location.pathname.includes("/surroundings")) {
    return (
      <div className="w-screen flex flex-col justify-center items-center bg-dong_white">
        <div className="h-20 flex items-center">
          <span className="text-sm text-dong_light_black font-bold">
            {location.pathname.includes("type") ? "유형 탐색" : "주변 탐색"}
          </span>
        </div>
        {location.pathname.includes("/type") ? null : (
          <div className="w-[21.25rem] h-14 relative flex">
            <div
              className="absolute top-1/2  left-4 transform -translate-y-1/2 flex justify-center items-center"
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoIosArrowBack className="text-dong_deep_gray text-xl" />
            </div>
            <div className="w-full h-full">
              <input
                type="text"
                className="border-dong_light_gray border-solid border-[0.0625rem] w-full h-full pl-10 placeholder-dong_black placeholder-bold rounded-lg text-sm"
                placeholder="동네를 입력하세요"
                value={xClick}
                onChange={(e) => setXClick(e.target.value)}
              />
            </div>
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={() => setXClick("")}
            >
              <img src={Xicon} />
            </div>
          </div>
        )}
      </div>
    );
  }

  if (location.pathname.includes("/submit")) {
    return (
      <>
        <div className="w-screen h-20 flex justify-between items-center px-7 border-b-[0.0625rem] border-dong_deep_gray">
          <img src={Xicon} alt="x" onClick={() => setShowPopup(true)} />
          <div className="text-dong_light_black">새 게시물</div>
          <div
            className="text-dong_light_black font-bold"
            onClick={() => {
              navigate("/circle-me");
            }}
          >
            등록
          </div>
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
      </>
    );
  }

  return null;
};
