import { useNavigate } from "react-router-dom";

import { ActionButtons } from "../../components/ActionButtons";

export const ExploreType = () => {
  const navigate = useNavigate();

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
              onClick={() => {
                navigate("/circle-me/explore/surroundings/theme");
              }}
              disabled={false}
            >
              장애인
            </ActionButtons>
          </li>
          <li>
            <ActionButtons
              onClick={() => {
                navigate("/circle-me/explore/surroundings/theme");
              }}
              disabled={false}
            >
              노약자
            </ActionButtons>
          </li>
          <li>
            <ActionButtons
              onClick={() => {
                navigate("/circle-me/explore/surroundings/theme");
              }}
              disabled={false}
            >
              안내견 보호자
            </ActionButtons>
          </li>
          <li>
            <ActionButtons
              onClick={() => {
                navigate("/circle-me/explore/surroundings/theme");
              }}
              disabled={false}
            >
              어린이
            </ActionButtons>
          </li>
        </ul>
      </div>
    </div>
  );
};
