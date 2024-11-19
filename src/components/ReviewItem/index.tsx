export const ReviewItem = ({
  store,
  state,
  review,
  isImage,
  onClick,
}: {
  store: string
  state: string
  review: string
  isImage: boolean
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="w-[20.563rem] h-auto border-dong_light_gray border-solid border-2 rounded-[1.25rem] relative">
      <div className="absolute flex gap-1 top-3 right-3">
        <div onClick={onClick}>
          <span className="text-[0.625rem] text-dong_light_gray font-bold underline">
            수정
          </span>
        </div>
        <div onClick={onClick}>
          <span className="text-[0.625rem] text-dong_light_gray font-bold underline">
            삭제
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-6 ml-7">
        <div className="flex gap-3 mb-3">
          <div>
            <span className="text-sm leading-5 font-bold">{store}</span>
          </div>
          <div className="w-[4.454rem] h-6 rounded-md bg-dong_primary text-center">
            <div>
              <span className="text-dong_white text-[0.5rem] font-bold">
                {state}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[12.5rem] h-auto mb-6">
          <span className="text-[0.625rem] font-medium inline-block leading-none">
            {review}
          </span>
        </div>
        <div className="mb-[0.625rem]">
          <span className="text-[0.625rem] text-dong_deep_gray font-bold underline">
            자세히 보기
          </span>
        </div>
        {isImage && (
          <div className="mb-[1.342rem]">
            <ul className="flex gap-[0.548rem]">
              <li className="w-[6.577rem] h-[6.096rem] bg-dong_light_gray rounded-lg"></li>
              <li className="w-[6.577rem] h-[6.096rem] bg-dong_light_gray rounded-lg"></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
