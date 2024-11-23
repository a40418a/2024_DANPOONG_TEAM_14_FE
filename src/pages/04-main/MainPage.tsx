import { useState } from "react";

import { KakaoMap } from "../../components/KakaoMap";
import { CategoryItem } from "../../components/CategoryItem";

export const MainPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category],
    );
  };
  return (
    <div className="mt-28">
      <div className="flex items-center justify-center">
        <ul className="flex gap-1">
          <li>
            <div className="w-20 h-7 rounded-lg bg-dong_primary flex justify-center">
              <select
                name="category"
                id="category"
                className="bg-dong_primary w-full h-full rounded-lg text-xs text-dong_white text-center"
              >
                <option value="distance">거리순</option>
                <option value="correct">정확도순</option>
              </select>
            </div>
          </li>
          <li>
            <CategoryItem
              onClick={() => handleCategoryClick("CE7")}
              isClicked={selectedCategories.includes("CE7")}
            >
              카페
            </CategoryItem>
          </li>
          <li>
            <CategoryItem
              onClick={() => handleCategoryClick("FD6")}
              isClicked={selectedCategories.includes("FD6")}
            >
              음식점
            </CategoryItem>
          </li>
          <li>
            <CategoryItem
              onClick={() => handleCategoryClick("CS2")}
              isClicked={selectedCategories.includes("CS2")}
            >
              편의시설
            </CategoryItem>
          </li>
        </ul>
      </div>
      <div className="mt-[12px]">
        <KakaoMap categories={selectedCategories} />
      </div>
    </div>
  );
};
