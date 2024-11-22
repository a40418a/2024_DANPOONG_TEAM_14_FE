import { useNavigate } from "react-router-dom";

import { FiCamera } from "react-icons/fi";

import { ActionButtons } from "../../components/ActionButtons";
import { InputItem } from "../../components/InputItem";
import { TypeSelectItem } from "../../components/TypeSelectItem";

export const ProfileEditPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="mb-1">
        <div className="relative">
          <div className="w-[4.688rem] h-[4.688rem] bg-dong_deep_gray rounded-[50%]"></div>
          <div className="w-[2.313rem] h-[2.313rem] bg-dong_white rounded-[50%] absolute bottom-[-0.25rem] right-[-0.375rem] z-10 flex justify-center items-center">
            <div className="w-[2.125rem] h-[2.125rem] bg-dong_deep_gray rounded-[50%] flex justify-center items-center">
              <FiCamera className="w-3 h-3 text-dong_white" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="mb-4">
          <span className="text-base leading-5 font-bold">이름</span>
        </div>
        <div>
          <InputItem
            type={"text"}
            width={333}
            height={55}
            placeholder={"사용자"}
          />
        </div>
      </div>
      <div className="flex items-center gap-12">
        <div>
          <div className="mb-3">
            <span className="text-base leading-5 font-bold">나이</span>
          </div>
          <div className="flex items-center">
            <div>
              <InputItem
                type={"number"}
                width={127}
                height={45}
                placeholder={""}
              />
            </div>
            <div className="ml-2">
              <span className="text-sm leading-5 font-medium">세</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <span className="text-base leading-5 font-bold">성별</span>
          </div>
          <div>
            <InputItem
              type={"select"}
              width={127}
              height={45}
              placeholder={""}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-32">
        <div className="flex items-center gap-[11.938rem] mb-5 mt-14">
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
              console.log();
            }}
          >
            장애인
          </TypeSelectItem>
        </div>
      </div>
      <div className="fixed bottom-5">
        <div className="mb-4">
          <ActionButtons
            onClick={() => {
              navigate("/");
            }}
            disabled={false}
          >
            로그아웃
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
