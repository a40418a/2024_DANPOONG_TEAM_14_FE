import { useLocation } from "react-router-dom";

export const ActionButtons = ({
  children,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) => {
  const location = useLocation();

  if (
    children === "다음" ||
    children === "완료" ||
    children === "선택 삭제하기" ||
    children === "리뷰 수정하기" ||
    children === "리뷰 작성하기"
  ) {
    return (
      <button
        className={`w-80 h-14  ${
          disabled ? "bg-dong_deep_gray" : "bg-dong_secondary"
        } text-white rounded-lg text-sm font-bold`}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  } else if (children === "로그아웃") {
    return (
      <button
        className={`w-80 h-14 ${
          location.pathname.includes("/edit")
            ? "bg-dong_primary text-dong_white"
            : "bg-dong_light_gray text-dong_secondary"
        }  font-bold rounded-lg text-sm `}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  } else if (children === "회원탈퇴") {
    return (
      <button
        className={`w-80 h-14 bg-dong_secondary text-dong_white rounded-lg text-sm font-bold `}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  if (children === "주변 탐색하기" || children === "이동약자 탐색하기") {
    return (
      <button
        className={`w-[19.5rem] h-[6.875rem] ${
          children === "주변 탐색하기" ? "bg-dong_primary" : "bg-dong_secondary"
        } rounded-lg  `}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-lg font-bold text-dong_white">{children}</span>
      </button>
    );
  }

  if (location.pathname.includes("/type")) {
    return (
      <button
        className="w-40 h-44 bg-dong_primary rounded-lg"
        onClick={onClick}
      >
        <span className=" text-dong_white font-bold">{children}</span>
      </button>
    );
  }

  if (location.pathname.includes("/theme")) {
    return (
      <button
        className="w-80 h-28  bg-dong_deep_gray rounded-lg "
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-lg text-dong_white font-bold">{children}</span>
      </button>
    );
  }

  return (
    <button
      className="w-[18.75rem] h-14 bg-dong_primary rounded-lg  "
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="text-dong_white font-bold text-sm">{children}</span>
    </button>
  );
};
