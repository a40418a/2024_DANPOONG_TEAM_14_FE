import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TypeSelectItem } from "../../components/TypeSelectItem";
import { ActionButtons } from "../../components/ActionButtons";

export const TypeSelectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const isSelected = (item: string): boolean => item === selectedItem;

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
              setSelectedItem("장애인");
            }}
            selected={isSelected("장애인")}
          >
            장애인
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem
            onClick={() => {
              setSelectedItem("노약자");
            }}
            selected={isSelected("노약자")}
          >
            노약자
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem
            onClick={() => {
              setSelectedItem("어린이");
            }}
            selected={isSelected("어린이")}
          >
            어린이
          </TypeSelectItem>
        </li>
      </ul>
      <div className="text-center fixed bottom-5">
        <ActionButtons
          onClick={() => {
            if (location.pathname === "/types") {
              navigate("/done");
            } else {
              navigate("/circle-me/profile/edit");
            }
          }}
          disabled={selectedItem === null}
        >
          완료
        </ActionButtons>
      </div>
    </div>
  );
};
