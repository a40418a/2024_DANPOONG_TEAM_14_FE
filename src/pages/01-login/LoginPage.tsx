// import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import kakao from "../../assets/images/kakao_login_medium_wide.png";

export const LoginPage = () => {
  // const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-3">
        <span className="text-lg font-medium">이동약자를 위한 지도 서비스</span>
      </div>
      <div className="text-[2.5rem] font-bold">
        <span>동그라</span>
        <span className="text-dong_primary">ME</span>
      </div>
      <div className="w-[8.818rem] h-[12.5rem] my-20">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div
        className=" h-14 relative flex justify-center items-center rounded-lg  "
        onClick={() => {
          window.location.href =
            "https://api.circleme.site/oauth2/authorization/kakao";
        }}
      >
        <img src={kakao} />
      </div>
    </div>
  );
};
