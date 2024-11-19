// 테마졀 카테고리 페이지에서 사용되는 가게 정보 아이템 컴포넌트

export const StoreInfoItem = ({
  store,
  address,
}: {
  store: string
  address: string
}) => {
  return (
    <div className="w-80 h-32 rounded-[1.25rem] border-solid border-2 border-dong_light_gray flex gap-[1.111rem] items-center relative">
      <div className="w-[6.577rem] h-[6.096rem] bg-dong_light_gray rounded-lg ml-9"></div>
      <div>
        <div>
          <span className="text-sm leading-5 font-bold">{store}</span>
        </div>
        <div>
          <span className="text-xs font-medium">{address}</span>
        </div>
      </div>
      <div className="absolute top-3 right-3 ">
        <span className="text-[0.625rem] font-bold text-dong_light_gray underline">
          삭제
        </span>
      </div>
    </div>
  )
}
