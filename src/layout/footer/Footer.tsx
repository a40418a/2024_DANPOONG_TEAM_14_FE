import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { GrLocation } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { LuUser } from "react-icons/lu";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (
    location.pathname === "/circle-me" ||
    location.pathname.includes("/surroundings") ||
    location.pathname.includes("/category")
  ) {
    return (
      <div className="w-full h-[3.75rem] m-auto fixed bottom-0 bg-dong_white">
        <ul className="flex h-full justify-center items-center gap-14">
          <li
            onClick={() => {
              navigate("/circle-me/bookmark");
            }}
          >
            <GrLocation className="w-6 h-[1.875rem] text-dong_primary font-bold" />
          </li>
          <li
            onClick={() => {
              navigate("/circle-me/explore/surroundings");
            }}
          >
            <GoHome className="w-7 h-7 text-dong_primary font-bold " />
          </li>
          <li
            onClick={() => {
              navigate("/circle-me/profile");
            }}
          >
            <LuUser className="w-6 h-7 text-dong_primary font-bold" />
          </li>
        </ul>
      </div>
    );
  }

  return null;
};
