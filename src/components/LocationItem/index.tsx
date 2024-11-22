export const LocationItem = ({
  usage,
  state = "",
  restaurantType = "",
  restaurant,
}: {
  usage: string;
  state: string;
  restaurantType: string;
  restaurant: string;
}) => {
  return (
    <div className="w-32 h-32 bg-dong_light_gray rounded-lg flex flex-col p-2 box-border">
      <div className="w-full h-24 bg-dong_deep_gray rounded-lg "></div>
      <div className="flex flex-col ml-3">
        <div className="">
          {usage === "리뷰" ? (
            <span className="text-[0.5rem] text-dong_secondary">{state}</span>
          ) : (
            <span className="text-[0.5rem] text-dong_secondary">
              {restaurantType}
            </span>
          )}
        </div>
        <div>
          <span className="text-[0.625rem] font-bold">{restaurant}</span>
        </div>
      </div>
    </div>
  );
};
