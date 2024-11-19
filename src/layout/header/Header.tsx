import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

import { IoIosArrowBack } from "react-icons/io"
import { FaUser } from "react-icons/fa6"
import { FaBars } from "react-icons/fa6"
import { CiSettings } from "react-icons/ci"

import { CategoryItem } from "../../components/CategoryItem"
import { ExitCheckModal } from "../../components/ExitCheck"
import { useStoreType } from "../../hooks/useStoreType"
import { useGetHeaderTitle } from "../../hooks/useGetHeaderTitle"

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const storeType = useStoreType()
  const headerTitle = useGetHeaderTitle()
  const [isModal, setIsModal] = useState(false)

  const handleExit = () => {
    setIsModal(true)
  }
  const handleConfirmExit = () => {
    setIsModal(false)
    // 어디로 움직일 것인가?
    navigate("/circle-me")
  }

  const handleCancleExit = () => {
    setIsModal(false)
  }

  if (
    location.pathname === "/accept" ||
    location.pathname.includes("/types") ||
    location.pathname.includes("/category") ||
    location.pathname === "/circle-me/bookmark"
  ) {
    return (
      <div className="w-[24.563rem] h-auto m-auto">
        <div className="flex bg-cir_white relative justify-center items-center pt-7">
          <div
            className="absolute left-9 top-[3.75rem] "
            onClick={() => {
              if (location.pathname === "/types") {
                navigate("/accept")
              } else if (location.pathname === "/accept") {
                navigate("/login")
              } else if (
                location.pathname === "/circle-me/profile/edit/types"
              ) {
                navigate("/circle-me/profile/edit")
              } else if (location.pathname === "/circle-me/bookmark") {
                navigate("/circle-me")
              }
            }}
          >
            <IoIosArrowBack className="text-dong_deep_gray text-xl " />
          </div>
          {location.pathname === "/accept" && (
            <div>
              <span className="text-sm text-dong_deep_gray font-bold">
                약관 동의
              </span>
            </div>
          )}
          {location.pathname.includes("/category") && (
            <div>
              <span className="text-sm text-dong_deep_gray font-bold">
                {storeType}
              </span>
            </div>
          )}
          {location.pathname === "/circle-me/bookmark" && (
            <div>
              <span className="text-sm text-dong_deep_gray font-bold">
                내 북마크 장소
              </span>
            </div>
          )}
          {location.pathname === "/types" && (
            <div className="flex absolute right-9 top-[3.75rem]">
              <div>
                <span className="text-sm font-bold text-dong_light_gray">
                  Kakao
                </span>
              </div>
              <div className="w-6 h-6 bg-dong_light_gray rounded-lg flex items-center justify-center ml-2">
                <div>
                  <FaUser className="text-dong_white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (location.pathname === "/circle-me") {
    return (
      <div className="w-[24.563rem] h-36 flex flex-col items-center m-auto">
        <div className="w-[21.25rem] h-14  relative mt-10 flex mb-4">
          <div className="absolute top-1/2  left-4 transform -translate-y-1/2 flex justify-center items-center">
            <IoIosArrowBack className="text-dong_deep_gray text-xl" />
          </div>
          <div className="w-full h-full">
            <input
              type="text"
              className="border- dong_light_gray border-solid border-[0.094rem] w-full h-full pl-10 placeholder-dong_black placeholder-bold rounded-lg text-sm"
              placeholder="가게명/동네를 입력하세요"
            />
          </div>
          <div className="absolute top-1/2  right-5 transform -translate-y-1/2">
            <span className="text-dong_light_gray">X</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-5">
            <FaBars className="text-dong_deep_gray w-[1.125rem]" />
          </div>
          <ul className="flex gap-1">
            <li>
              <div className="w-[4.5rem] h-[1.688rem] rounded-lg bg-dong_primary flex justify-center">
                <select
                  name="category"
                  id="category"
                  className="bg-dong_primary w-full h-full rounded-lg text-[0.625rem] text-dong_white text-center"
                >
                  <option value="distance">거리순</option>
                  <option value="correct">정확도순</option>
                </select>
              </div>
            </li>
            <li>
              <CategoryItem>카페</CategoryItem>
            </li>
            <li>
              <CategoryItem>음식점</CategoryItem>
            </li>
            <li>
              <CategoryItem>편의시설</CategoryItem>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  if (
    location.pathname.includes("/circle-me/profile") ||
    location.pathname.includes("/review")
  ) {
    return (
      <div className="w-[21.25rem] flex gap-28 justify-center mt-7 m-auto">
        <div className="flex flex-col gap-1 items-center">
          <div>
            <FaBars className="text-dong_deep_gray w-[1.125rem]" />
          </div>
          <div>
            <IoIosArrowBack
              className="text-dong_deep_gray text-xl"
              onClick={() => {
                if (location.pathname.includes("/edit")) {
                  navigate("/circle-me/profile")
                } else {
                  navigate("/circle-me")
                }
              }}
            />
          </div>
        </div>
        <div>
          <span className="text-dong_deep_gray text-sm font-bold">
            {headerTitle}
          </span>
        </div>
        {location.pathname === "/circle-me/profile/edit" ? (
          <div
            onClick={() => {
              navigate("./circle-me/profile")
            }}
          >
            <span className="text-base text-dong_deep_gray font-bold leading-5">
              저장
            </span>
          </div>
        ) : location.pathname.includes("/review") ? (
          <div></div>
        ) : (
          <div
            className="flex flex-col justify-center"
            onClick={() => {
              navigate("/circle-me/profile/edit")
            }}
          >
            <div>
              <CiSettings className="text-dong_light_gray w-[1.375rem] h-[1.375rem]" />
            </div>
            <div>
              <span className="text-dong_light_gray text-xs font-bold">
                수정
              </span>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (location.pathname.includes("/surroundings")) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="mb-6 mt-7">
          <span className="text-sm text-dong_deep_gray font-bold">
            {location.pathname.includes("type") ? "유형 탐색" : "주변 탐색"}
          </span>
        </div>
        {location.pathname.includes("/type") ? null : (
          <div className="w-[21.25rem] h-14 relative flex mb-4">
            <div
              className="absolute top-1/2  left-4 transform -translate-y-1/2 flex justify-center items-center"
              onClick={() => {
                navigate("/circle-me")
              }}
            >
              <IoIosArrowBack className="text-dong_deep_gray text-xl" />
            </div>
            <div className="w-full h-full">
              <input
                type="text"
                className="border-dong_light_gray border-solid border-[0.094rem] w-full h-full pl-10 placeholder-dong_black placeholder-bold rounded-lg text-sm"
                placeholder="동네를 입력하세요"
              />
            </div>
            <div className="absolute top-1/2  right-5 transform -translate-y-1/2">
              <span className="text-dong_light_gray">X</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (location.pathname.includes("/submit")) {
    return (
      <>
        <div className="flex justify-between items-center py-4 px-5 border-b-[0.031rem] border-dong_deep_gray">
          <img src="../src/assets/images/x.svg" alt="x" onClick={handleExit} />
          <div
            className="text-dong_deep_gray text-sm"
            onClick={() => {
              navigate("/circle-me")
            }}
          >
            등록
          </div>
        </div>
        <ExitCheckModal
          isOpen={isModal}
          onConfirm={handleConfirmExit}
          onCancel={handleCancleExit}
        />
      </>
    )
  }

  return null
}
