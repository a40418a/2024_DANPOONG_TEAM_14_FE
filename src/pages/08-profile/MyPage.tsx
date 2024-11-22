import { useNavigate } from "react-router-dom";
import { ActionButtons } from "../../components/ActionButtons";
import { MyCollection } from "../../components/MyCollection";

export const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-24">
        <div className="flex items-center mb-5 ml-9">
          <div className="w-[4.5rem] h-[4.5rem] rounded-[100%] bg-dong_light_gray"></div>
          <div className="ml-[1.375rem]">
            <div>
              <span className="text-lg font-bold leading-6">사용자 이름</span>
            </div>
            <div>
              <span className="text-sm text-dong_primary font-bold">
                장애인
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-8 justify-center">
            <li className="flex flex-col justify-center items-center text-xs leading-4 font-medium">
              <span>작성리뷰</span>
              <span>3</span>
            </li>
            <li className="flex flex-col justify-center items-center text-xs leading-4 font-medium">
              <span>즐겨찾기</span>
              <span>13</span>
            </li>
          </ul>
        </div>
        <div className="mt-4 mb-8 text-center">
          <ActionButtons
            onClick={() => {
              navigate("/");
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
