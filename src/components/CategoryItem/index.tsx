export const CategoryItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[4.5rem] h-[1.688rem] rounded-lg bg-dong_light_gray text-center">
      <span className="text-[0.625rem] font-bold text-dong_white">
        {children}
      </span>
    </div>
  )
}
