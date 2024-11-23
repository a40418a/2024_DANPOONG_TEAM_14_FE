import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { ActionButtons } from "../../components/ActionButtons";
import { TypeSelectItem } from "../../components/TypeSelectItem";
import { getUserInfo, updateUserInfo } from "../../api/userInfoApi";

export const ProfileEditPage = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState<string>(""); // 초기값 비어 있음
  const [username, setUsername] = useState<string>("사용자 이름");
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");

  // 초기 사용자 정보를 가져옴
  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const userInfo = await getUserInfo();
        console.log("Fetched user info:", userInfo);
        setSelectedUserType(userInfo.data.userType); // API에서 userType 가져와 설정
        setUsername(userInfo.data.username);
        setProfileImageUrl(userInfo.data.profileImageUrl);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        alert("사용자 정보를 불러오는데 실패했습니다.");
      }
    };

    fetchUserType();
  }, []);
  const handleUpdateUserType = async () => {
    try {
      const response = await updateUserInfo(selectedUserType);
      console.log("User type updated successfully:", response);

      alert("이동약자 유형이 성공적으로 변경되었습니다.");
      navigate("/circle-me/profile");
    } catch (error) {
      console.error("Failed to update user type:", error);
      alert("이동약자 유형 변경에 실패했습니다. 다시 시도해주세요.");
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
          <span className="text-base leading-5 font-bold">이름</span>
        </div>
        <div>{username}</div>
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
          <TypeSelectItem
            selected={true}
            onClick={() => {
              console.log(selectedUserType);
            }}
          >
            {selectedUserType === "DISABLED" || "장애인"}
            {selectedUserType === "ASSISTANCE_DOG" || "안내견 보호자"}
            {selectedUserType === "ELDERLY" || "노약자"}
            {selectedUserType === "CHILD" || "어린이"}
          </TypeSelectItem>
        </div>
      </div>
      <div className="fixed bottom-5">
        <div className="mb-4">
          <ActionButtons onClick={handleUpdateUserType} disabled={false}>
            저장
          </ActionButtons>
        </div>
        <div>
          <ActionButtons
            onClick={() => {
              navigate("/");
            }}
            disabled={false}
          >
            회원탈퇴
          </ActionButtons>
        </div>
      </div>
    </div>
  );
};
