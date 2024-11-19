import { useState, useEffect } from "react"
import classNames from "classnames"

export const ReviewSubmitPage = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const [keyboard, setKeyboard] = useState<number>(0)

  const options = [
    { id: "comfortable", label: "편했어요" },
    { id: "a_bit_uncomfortable", label: "조금 불편했어요" },
    { id: "uncomfortable", label: "불편했어요" },
  ]

  // 키보드 감지
  useEffect(() => {
    const handleSize = () => {
      const viewportHeight = window.innerHeight
      const fullHeight = document.documentElement.clientHeight

      // 키보드가 올라가 있으면 화면 높이 변화 감지
      if (viewportHeight < fullHeight) {
        setKeyboard(fullHeight - viewportHeight) // 키보드 높이만큼 offset 설정
      } else {
        setKeyboard(0) // 키보드 내려가면 offset 초기화
      }
    }

    window.addEventListener("resize", handleSize)
    return () => window.removeEventListener("resize", handleSize)
  }, [])

  return (
    <div className="flex flex-col">
      {/* 입력 부분 */}
      <div>
        <input
          type="text"
          className="mt-[4.75rem] w-full placeholder-dong_deep_gray text-lg font-bold"
          placeholder="제목을 입력해주세요."
        />
        <textarea
          className="mt-5 w-full h-52 placeholder-dong_deep_gray resize-none"
          placeholder="내용을 입력해주세요."
        />
      </div>

      {/* 하단 부분 */}
      <div
        className="fixed w-full transition-transform duration-300"
        style={{ bottom: `${keyboard}px` }}
      >
        {/* 버튼 */}
        <div className="flex gap-4 mt-5">
          {options.map((option) => (
            <div
              key={option.id}
              className={classNames(
                "box-border w-28 p-1 text-center rounded-full",
                {
                  "bg-dong_primary": selected === option.id,
                  "bg-dong_light_gray": selected !== option.id,
                },
              )}
              onClick={() => setSelected(option.id)}
            >
              {option.label}
            </div>
          ))}
        </div>
        {/* 태그 */}
        <input
          type="text"
          className="text-dong_deep_gray text-xs py-4 placeholder-dong_deep_gray w-full"
          placeholder="# 태그를 입력해 주세요."
        />
        {/* 첨부파일 */}
        <div className="py-4 flex gap-2 items-center">
          <img src="../src/assets/images/gallery.svg" alt="gallery" />
          <span className="text-dong_deep_gray text-xs">0/10</span>
        </div>
      </div>
    </div>
  )
}
