import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ActionButtons } from "../../components/ActionButtons";
import { MyCollection } from "../../components/MyCollection";
import { getUserInfo } from "../../api/userInfoApi";
import { logoutUser } from "../../api/loginApi";

export const MyPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("사용자 이름");
  const [userType, setUserType] = useState<string>("유형 없음");
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");
  const [review, setReview] = useState<number>(0);
  const [bookmark, setBookmark] = useState<number>(0);

  // userType 매핑 객체
  const userTypeMapping: { [key: string]: string } = {
    DISABLED: "장애인",
    ASSISTANCE_DOG: "안내견 보호자",
    ELDERLY: "노약자",
    CHILD: "어린이",
  };

  // 사용자 정보를 가져오는 useEffect
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        console.log("Fetched user info:", userInfo);

        // 상태 업데이트
        setUsername(userInfo.data.username);
        setUserType(userTypeMapping[userInfo.data.userType] || "유형 없음");
        setProfileImageUrl(userInfo.data.profileImageUrl);
        setReview(userInfo.data.reviewNum);
        setBookmark(userInfo.data.bookmarkNum);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        alert("사용자 정보를 불러오는데 실패했습니다.");
      }
    };

    fetchUserInfo();
  }, []);

  // 로그아웃 함수
  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/"); // 홈으로 리다이렉트
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div>
      <div className="mt-24">
        <div className="flex items-center mb-5 ml-9">
          <div className="w-[4.5rem] h-[4.5rem] rounded-[100%] bg-dong_light_gray">
            <img
              src={profileImageUrl}
              alt="프로필 이미지"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-[1.375rem]">
            <div>
              <span className="text-lg font-bold leading-6">{username}</span>
            </div>
            <div>
              <span className="text-sm text-dong_primary font-bold">
                {userType}
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-8 justify-center">
            <li className="flex flex-col justify-center items-center text-xs leading-4 font-medium">
              <span>작성리뷰</span>
              <span>{review}</span>
            </li>
            <li className="flex flex-col justify-center items-center text-xs leading-4 font-medium">
              <span>북마크</span>
              <span>{bookmark}</span>
            </li>
          </ul>
        </div>
        <div className="mt-4 mb-8 text-center">
          <ActionButtons
            onClick={() => {
              handleLogout();
            }}
            disabled={false}
          >
            로그아웃
          </ActionButtons>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <MyCollection
              collection={"리뷰"}
              onClick={() => {
                navigate("/circle-me/review");
              }}
            />
          </div>
          <div>
            <MyCollection
              collection={"북마크"}
              onClick={() => {
                navigate("/circle-me/bookmark");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
