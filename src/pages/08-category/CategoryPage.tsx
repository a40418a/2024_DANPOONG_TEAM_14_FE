import { useStoreType } from "../../hooks/useStoreType"
import { StoreInfoItem } from "../../components/StoreInfoItem"

export const CategoryPage = () => {
  const title = useStoreType()

  return (
    <div className="mt-24 flex flex-col">
      <div className="mb-7 ml-11 ">
        <span className="text-lg leading-5 font-bold">{title}</span>
      </div>
      <div className="mb-[4.375rem]">
        <ul className="flex flex-col items-center gap-2 overflow-y-scroll">
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
        </ul>
      </div>
    </div>
  )
}
