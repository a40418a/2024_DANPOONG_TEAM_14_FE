// 유형선택 할 때 사용하는 버튼

export const TypeSelectItem = ({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) => {
  const changeEng = ({ children }: { children: React.ReactNode }): string => {
    if (children === "장애인") {
      return "Disabled person";
    } else if (children === "안내견 보호자") {
      return "A guide dog guardian";
    } else if (children === "노약자") {
      return "Elderly person";
    } else if (children === "어린이") {
      return "Child";
    }

    return "unknown";
  };

  const makeDesc = ({
    children,
  }: {
    children: React.ReactNode;
  }): React.ReactNode => {
    if (children === "장애인") {
      return (
        <>
          물리적, 사회적 장벽으로 인해
          <br />
          일상생활과 사회 참여에 어려움을 겪어요
        </>
      );
    } else if (children === "안내견 보호자") {
      return (
        <>
          시각 장애인의 안내견을 돌보고 관리하며,
          <br />
          건강하게 역할을 수행하도록 돕는 사람입니다
        </>
      );
    } else if (children === "노약자") {
      return (
        <>
          체력 저화와 건강 문제로
          <br />
          인해 일상활동에 제약이 있어요.
        </>
      );
    } else if (children === "어린이") {
      return (
        <>
          신체적, 정신적 발달 단계에
          <br />
          있어 보호와 지도가 필요해요.
        </>
      );
    }

    return null;
  };

  return (
    <div
      className={`w-[18.75rem] h-auto text-dong_white rounded-lg flex justify-center ${
        selected ? "bg-dong_primary" : "bg-dong_deep_gray"
      } flex flex-col h-full px-8 py-5`}
      onClick={onClick}
    >
      <span className="text-sm font-bold mb-1">
        {children}
        <span className="text-[0.625rem] ml-1">{changeEng({ children })}</span>
      </span>
      <span className="text-xs font-medium">{makeDesc({ children })}</span>
    </div>
  );
};
