import { useEffect } from "react"

// 매번 맨 위로 스크롤을 올리는 훅
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}
