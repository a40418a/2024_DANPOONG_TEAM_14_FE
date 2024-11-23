import { useNavigate } from "react-router-dom";
import { saveUserType } from "../../api/saveUserType";
import { useState } from "react";

import { ActionButtons } from "../../components/ActionButtons";

import jangIcon from "../../assets/images/장애인.svg";
import noIcon from "../../assets/images/노약자.svg";
import dogIcon from "../../assets/images/안내견보호자.svg";
import childIcon from "../../assets/images/어린이.svg";

export const ExploreType = () => {
  const navigate = useNavigate();
  const [_loading, setLoading] = useState(false);

  const handleUserTypeClick = async (userType: string) => {
    setLoading(true);
    try {
      await saveUserType(userType);
      navigate("/circle-me/explore/surroundings/theme");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-24 flex flex-col items-center">
      <div>
        <span className="text-lg font-bold">
          사용자님의 유형을 선택해주세요.
        </span>
      </div>
      <div className="mt-12">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <ActionButtons
              onClick={() => handleUserTypeClick("DISABLED")}
              disabled={false}
            >
              <img src={jangIcon} alt="장애인" className="mb-4" />
              장애인
            </ActionButtons>
          </li>
          <li>
            <ActionButtons
              onClick={() => handleUserTypeClick("ELDERLY")}
              disabled={false}
            >
              <img src={noIcon} alt="노약자" className="mb-4" />
              노약자
            </ActionButtons>
          </li>
          <li>
            <ActionButtons
              onClick={() => handleUserTypeClick("ASSISTANCE_DOG")}
              disabled={false}
            >
              <img src={dogIcon} alt="안내견 보호자" className="mb-4" />
              안내견 보호자
            </ActionButtons>
          </li>
          <li>
            <ActionButtons
              onClick={() => handleUserTypeClick("CHILD")}
              disabled={false}
            >
              <img src={childIcon} alt="어린이" className="mb-4" />
              어린이
            </ActionButtons>
          </li>
        </ul>
      </div>
    </div>
  );
};
