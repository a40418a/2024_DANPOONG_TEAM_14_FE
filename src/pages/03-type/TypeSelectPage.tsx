import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TypeSelectItem } from "../../components/TypeSelectItem";
import { ActionButtons } from "../../components/ActionButtons";
import { postUserType } from "../../api/saveUserTypeApi";

export const TypeSelectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const isSelected = (item: string): boolean => item === selectedItem;

  const handleNextClick = async () => {
    if (!selectedItem) {
      console.log("No item selected");
      return;
    }

    try {
      console.log("Sending user type:", selectedItem);
      const response = await postUserType(selectedItem);
      console.log("API Response:", response);

      if (location.pathname === "/types") {
        navigate("/done");
      } else {
        navigate("/circle-me/profile/edit");
      }
    } catch (error) {
      console.error("Failed to save user type:", error);
      console.log("유형 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="text-lg leading-6 font-bold flex flex-col justify-center items-center">
        <span>사용자님의 유형을 선택해주세요.</span>
        <span>맞춤 여행 장소를 추천해 드릴게요!</span>
      </div>
      <ul className="flex flex-col items-center gap-3 mt-5">
        <li>
          <TypeSelectItem
            onClick={() => {
              setSelectedItem("DISABLED");
            }}
            selected={isSelected("DISABLED")}
          >
            장애인
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem
            onClick={() => {
              setSelectedItem("ASSISTANCE_DOG");
            }}
            selected={isSelected("ASSISTANCE_DOG")}
          >
            안내견 보호자
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem
            onClick={() => {
              setSelectedItem("ELDERLY");
            }}
            selected={isSelected("ELDERLY")}
          >
            노약자
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem
            onClick={() => {
              setSelectedItem("CHILD");
            }}
            selected={isSelected("CHILD")}
          >
            어린이
          </TypeSelectItem>
        </li>
      </ul>
      <div className="text-center fixed bottom-5">
        <ActionButtons
          onClick={handleNextClick}
          disabled={selectedItem === null}
        >
          완료
        </ActionButtons>
      </div>
    </div>
  );
};
