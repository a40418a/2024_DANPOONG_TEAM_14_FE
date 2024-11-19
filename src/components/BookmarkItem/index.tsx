import { useState } from "react"

export const BookmarkItem = ({
  name,
  type,
  onClick,
}: {
  name: string
  type: string
  onClick: () => void
}) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="flex items-center gap-4">
      <span
        className={`w-6 h-6 border-solid border-2 border-dong_light_gray rounded-full transition-all duration-200 ${
          isChecked ? "bg-dong_secondary" : ""
        }`}
        onClick={() => {
          setIsChecked(!isChecked)
        }}
      />
      <div className="w-[19rem] h-32 border-solid border-2 border-dong_light_gray rounded-[1.25rem] flex relative gap-[1.111rem] items-center">
        <div className="w-[6.577rem] h-[6.096rem] bg-dong_light_gray rounded-lg ml-5"></div>
        <div>
          <div>
            <span className="text-sm leading-5 font-bold">{name}</span>
          </div>
          <div>
            <span className="text-xs font-medium text-dong_primary">
              {type}
            </span>
          </div>
        </div>
        <div className="absolute top-3 right-3" onClick={onClick}>
          <span className="text-dong_light_gray text-[0.625rem] font-bold underline">
            삭제
          </span>
        </div>
      </div>
    </div>
  )
}
