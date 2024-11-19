export const InputItem = ({
  type,
  width,
  height,
  placeholder,
}: {
  type: string
  width: number
  height: number
  placeholder: string
}) => {
  if (type === "select") {
    return (
      <div>
        <select
          className={`rounded-lg text-sm text-dong_light_gray placeholder-bold placeholder-dong_light_gray border-dong_light_gray border-solid border-[0.094rem]`}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </div>
    )
  }

  return (
    <div>
      <input
        type={type}
        className={`rounded-lg text-sm placeholder-bold placeholder-dong_light_gray border-dong_light_gray border-solid border-[0.094rem] pl-5`}
        placeholder={placeholder}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  )
}
