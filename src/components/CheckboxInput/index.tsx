export const CheckboxInput = ({
  children,
  onChange,
  checked,
}: {
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}) => {
  return (
    <div className="flex items-center ml-11">
      <input
        type="checkbox"
        className="w-5  h-5 mr-3 border-[0.094rem] border-dong_light_gray rounded-md"
        onChange={onChange}
        checked={checked}
      />
      <label>
        <span className="text-sm font-bold">{children}</span>
      </label>
    </div>
  )
}
