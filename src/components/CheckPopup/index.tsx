export const CheckPopup = ({
  usage,
  onClick,
}: {
  usage: string
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}) => {
  let question: string = ""
  let positive: string = ""
  let negative: string = ""

  if (usage === "delete") {
    question = "삭제 하시겠습니까?"
    positive = "예"
    negative = "아니요"
  } else if (usage === "edit") {
    question = "수정하시겠습니까?"
    positive = "수정"
    negative = "취소"
  }

  return (
    <div className="w-[16.688rem] h-[8.25rem] rounded-[1.25rem] bg-dong_secondary">
      <div className="w-full h-[50%] flex items-center justify-center">
        <span className="text-[0.875rem] font-bold text-dong_white">
          {question}
        </span>
      </div>
      <hr className="w-full h-[0.1px]" />
      <div className="w-full h-[50%] flex">
        <div
          className="w-[50%] flex items-center justify-center"
          onClick={onClick}
        >
          <span className="text-[0.813rem] font-bold text-dong_white">
            {positive}
          </span>
        </div>
        <hr className="w-[0.1px] h-full bg-dong_white" />
        <div
          className="w-[50%] flex items-center justify-center"
          onClick={onClick}
        >
          <span className="text-[0.813rem] font-bold text-dong_white">
            {negative}
          </span>
        </div>
      </div>
    </div>
  )
}
