import { useParams } from "react-router-dom"

export const useStoreType = () => {
  const { theme } = useParams<{ theme: string | undefined }>()

  const storeTitle = (theme: string | undefined): string => {
    if (!theme) {
      return ""
    }

    switch (theme) {
      case "restaurant":
        return "음식점"
      case "cafe":
        return "카페"
      case "culture":
        return "문화시설"
      case "playground":
        return "놀이공원"
      case "hotel":
        return "숙박업소"
      default:
        return ""
    }
  }

  return storeTitle(theme)
}
