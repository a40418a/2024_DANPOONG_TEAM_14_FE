import { useNavigate } from "react-router-dom"

import { ImBubble } from "react-icons/im"
import logo from "../../assets/images/logo.svg"

export const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center">
      <div className="mt-44 mb-3">
        <span className="text-lg font-medium">이동약자를 위한 지도 서비스</span>
      </div>
      <div className="text-[2.5rem] font-bold">
        <span>동그라</span>
        <span className="text-dong_primary">ME</span>
      </div>
      <div className="w-[8.818rem] h-[12.5rem] mt-[7rem] mb-[7rem] flex justify-center">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div className="w-[18.75rem] h-14 bg-dong_primary relative flex justify-center items-center rounded-lg  ">
        <div className="absolute left-[4.5rem] top-4 w-5 h-5">
          <ImBubble />
        </div>
        <div
          onClick={() => {
            navigate("/accept")
          }}
        >
          <span className="text-sm text-dong_white ml-3 font-bold">
            카카오톡으로 로그인
          </span>
        </div>
      </div>
    </div>
  )
}
