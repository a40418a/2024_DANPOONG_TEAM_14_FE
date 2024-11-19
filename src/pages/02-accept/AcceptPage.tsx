import { useState, useEffect } from "react"
import { ActionButtons } from "../../components/ActionButtons"
import { CheckboxInput } from "../../components/CheckboxInput"
import { useNavigate } from "react-router-dom"

export const AcceptPage = () => {
  const navigate = useNavigate()

  const [allChecked, setAllChecked] = useState<boolean>(false)
  const [useChecked, setUseChecked] = useState<boolean>(false)
  const [locationChecked, setLocationChecked] = useState<boolean>(false)
  const [personalChecked, setPersonalChecked] = useState<boolean>(false)

  useEffect(() => {
    const isAllChecked = useChecked && locationChecked && personalChecked
    setAllChecked(isAllChecked)
  }, [useChecked, locationChecked, personalChecked])

  return (
    <div>
      <div className="pt-32 ml-11">
        <span className="text-lg font-bold">약관동의</span>
      </div>
      <div className="font-bold mt-11 mb-7">
        <CheckboxInput
          onChange={(e) => {
            setAllChecked(e.target.checked)
            setUseChecked(e.target.checked)
            setLocationChecked(e.target.checked)
            setPersonalChecked(e.target.checked)
          }}
          checked={allChecked}
        >
          전체 동의
        </CheckboxInput>
      </div>
      <hr className="w-[21.5rem] h-[0.031rem] bg-dong_deep_gray font-bold ml-[1.375rem]" />
      <ul className="list-none flex flex-col gap-7 mt-7">
        <li className="relative">
          <CheckboxInput
            onChange={(e) => {
              setUseChecked(e.target.checked)
            }}
            checked={useChecked}
          >
            이용약관 동의
          </CheckboxInput>
          <span className="text-dong_secondary text-xs font-medium absolute top-[0.125rem] left-40">
            (필수)
          </span>
        </li>
        <li className="relative">
          <CheckboxInput
            onChange={(e) => {
              setLocationChecked(e.target.checked)
            }}
            checked={locationChecked}
          >
            위치기반 서비스 이용 약관 동의
          </CheckboxInput>
          <span className="text-dong_secondary text-xs font-medium absolute top-[0.125rem] left-64">
            (필수)
          </span>
        </li>
        <li className="relative">
          <CheckboxInput
            onChange={(e) => {
              setPersonalChecked(e.target.checked)
            }}
            checked={personalChecked}
          >
            개인정보 수집 및 이용 동의
          </CheckboxInput>
          <span className="text-dong_secondary text-xs font-medium absolute top-[0.125rem] left-[14.5rem]">
            (필수)
          </span>
        </li>
      </ul>
      <div className="mt-[24.75rem] text-center">
        <ActionButtons
          onClick={() => navigate("/types")}
          disabled={!allChecked}
        >
          다음
        </ActionButtons>
      </div>
    </div>
  )
}
