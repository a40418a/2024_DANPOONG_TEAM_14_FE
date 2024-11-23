import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { ActionButtons } from "../../components/ActionButtons";
import { TypeSelectItem } from "../../components/TypeSelectItem";
import { getUserInfo } from "../../api/userInfoApi";
import { deleteUser } from "../../api/loginApi";

export const ProfileEditPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string>(""); // 초기값 비어 있음
  const [username, setUsername] = useState<string>("사용자 이름");
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");

  const userTypeMapping: { [key: string]: string } = {
    DISABLED: "장애인",
    ASSISTANCE_DOG: "안내견 보호자",
    ELDERLY: "노약자",
    CHILD: "어린이",
  };

  // 초기 사용자 정보를 가져옴
  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const userInfo = await getUserInfo();
        console.log("Fetched user info:", userInfo);
        setUserType(userInfo.data.userType); // API에서 userType 가져와 설정
        setUsername(userInfo.data.username);
        setProfileImageUrl(userInfo.data.profileImageUrl);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        alert("사용자 정보를 불러오는데 실패했습니다.");
      }
    };

    fetchUserType();
  }, []);

  // 회원 탈퇴 처리 함수
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "정말로 회원탈퇴를 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다.",
    );
    if (!confirmDelete) return;

    try {
      await deleteUser();
      console.log("회원 탈퇴가 완료되었습니다.");
      navigate("/"); // 탈퇴 후 홈으로 리다이렉트
    } catch (error) {
      console.error("Failed to delete account:", error);
      console.log("회원 탈퇴에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="mb-1">
        <div className="relative">
          <div className="w-16 h-16 bg-dong_deep_gray rounded-full">
            <img
              src={profileImageUrl}
              alt="프로필 이미지"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="mb-4">
          <span className="text-base mt-2 font-bold">{username}</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-48 my-5">
          <div>
            <span className="text-base font-bold leading-5">이동약자 유형</span>
          </div>
          <div
            onClick={() => {
              navigate("/circle-me/profile/edit/types");
            }}
          >
            <span className="text-dong_light_black text-xs font-bold leading-5">
              변경하기
            </span>
          </div>
        </div>
        <div>
          <TypeSelectItem selected={true} onClick={() => {}}>
            {userTypeMapping[userType]}
          </TypeSelectItem>
        </div>
      </div>
      <div className="fixed bottom-5">
        <div className="mb-4">
          <ActionButtons
            onClick={() => {
              navigate("/circle-me/profile");
            }}
            disabled={false}
          >
            저장
          </ActionButtons>
        </div>
        <div>
          <ActionButtons onClick={handleDeleteAccount} disabled={false}>
            회원탈퇴
          </ActionButtons>
        </div>
      </div>
    </div>
  );
};
