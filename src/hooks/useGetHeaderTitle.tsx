import { useLocation } from "react-router-dom"

export const useGetHeaderTitle = () => {
  const location = useLocation()

  if (location.pathname === "/circle-me/profile/edit") {
    return "프로필 수정"
  } else if (location.pathname === "/circle-me/profile") {
    return "마이 페이지"
  } else if (location.pathname === "/circle-me/review") {
    return "작성 리뷰"
  }

  return ""
}
