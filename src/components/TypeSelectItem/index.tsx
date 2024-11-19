// 유형선택 할 때 사용하는 버튼

export const TypeSelectItem = ({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode
  selected: boolean
  onClick: () => void
}) => {
  const changeEng = ({ children }: { children: React.ReactNode }): string => {
    if (children === "장애인") {
      return "Disabled person"
    } else if (children === "임산부") {
      return "Pregnant woman"
    } else if (children === "노약자") {
      return "Elderly person"
    } else if (children === "어린이") {
      return "Child"
    }

    return "unknown"
  }

  const makeDesc = ({
    children,
  }: {
    children: React.ReactNode
  }): React.ReactNode => {
    if (children === "장애인") {
      return (
        <>
          물리적, 사회적 장벽으로 인해
          <br />
          일상생활과 사회 참여에 어려움을 겪어요
        </>
      )
    } else if (children === "임산부") {
      return (
        <>
          신체적 변화와 건강상의 위험으로
          <br />
          인해 이동과 생활에 불편함을 겪어요.
        </>
      )
    } else if (children === "노약자") {
      return (
        <>
          체력 저화와 건강 문제로
          <br />
          인해 일상활동에 제약이 있어요.
        </>
      )
    } else if (children === "어린이") {
      return (
        <>
          신체적, 정신적 발달 단계에
          <br />
          있어 보호와 지도가 필요해요.
        </>
      )
    }

    return null
  }

  return (
    <div
      className={`w-[18.75rem] h-[5.625rem] rounded-lg border-2 ${
        selected ? "bg-dong_primary" : "bg-dong_light_gray"
      } border-solid hover:border-dong_primary  `}
      onClick={onClick}
    >
      <div
        className={`text-dong_white rounded-lg ${
          selected ? "bg-dong_primary" : "bg-dong_light_gray"
        } flex flex-col h-full pt-5 pl-8 hover:border-dong_primary  `}
        onClick={onClick}
      >
        <span className="text-sm font-bold mb-1">
          {children}
          <span className="text-[0.375rem] ml-1">
            {changeEng({ children })}
          </span>
        </span>
        <span className="text-[0.625rem] font-medium">
          {makeDesc({ children })}
        </span>
      </div>
    </div>
  )
}
