import { IoIosArrowForward } from "react-icons/io";
import { LocationItem } from "../LocationItem";

export const MyCollection = ({
  collection,
  onClick,
}: {
  collection: string;
  onClick: () => void;
}) => {
  let subTitle: string = "";

  const title = ({ collection }: { collection: string }): string => {
    if (collection === "리뷰") {
      subTitle = "내 작성리뷰 모두 보기";
      return "내 작성리뷰";
    } else if (collection === "북마크") {
      subTitle = "내 북마크 장소 모두 보기";
      return "내 북마크 장소 모두 보기";
    }

    return "";
  };

  return (
    <div>
      <div className="mb-4">
        <span className="text-base  font-bold leading-5">
          {title({ collection })}
        </span>
      </div>
      <div className="w-[20.563rem] h-auto border-solid border-2 border-dong_light_gray rounded-[1.25rem] p-3 box-border">
        <div
          className="flex items-center mb-3 justify-between"
          onClick={onClick}
        >
          <div>
            <span className="text-sm font-bold ">{subTitle}</span>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="">
          <ul className="flex items-center gap-2 overflow-x-scroll">
            <li>
              <LocationItem
                usage={collection}
                state={collection === "리뷰" ? "조금 불편했어요" : ""}
                restaurantType={collection === "리뷰" ? "" : "식당"}
                restaurant={"소고기 전문 식당"}
              />
            </li>
            <li>
              <LocationItem
                usage={collection}
                state={collection === "리뷰" ? "조금 불편했어요" : ""}
                restaurantType={collection === "리뷰" ? "" : "식당"}
                restaurant={"소고기 전문 식당"}
              />
            </li>
            <li>
              <LocationItem
                usage={collection}
                state={collection === "리뷰" ? "조금 불편했어요" : ""}
                restaurantType={collection === "리뷰" ? "" : "식당"}
                restaurant={"소고기 전문 식당"}
              />
            </li>
            <li>
              <LocationItem
                usage={collection}
                state={collection === "리뷰" ? "조금 불편했어요" : ""}
                restaurantType={collection === "리뷰" ? "" : "식당"}
                restaurant={"소고기 전문 식당"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
