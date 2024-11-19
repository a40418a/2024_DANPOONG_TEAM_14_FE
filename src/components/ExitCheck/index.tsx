import React from "react"

interface ExitConfirmationModalProps {
  isOpen: boolean // 모달 표시 여부
  onConfirm: () => void // 나가기 확인 콜백
  onCancel: () => void // 취소 콜백
}

export const ExitCheckModal: React.FC<ExitConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null // 모달이 열리지 않으면 렌더링하지 않음

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100">
      <div className="bg-white w-64 rounded-3xl p-6 text-center">
        <h2 className="text-base font-bold ">작성을 취소하시겠습니까?</h2>
        <p className=" mt-3">작성 중인 글은 등록되지 않습니다.</p>
        <div className="flex gap-4 mt-4 justify-center">
          <button
            onClick={onCancel}
            className="text-dong_deep_gray px-4 py-2 rounded-full border-dong_light_gray border-solid border-[0.063rem] "
          >
            계속 작성
          </button>
          <button
            onClick={onConfirm}
            className="text-dong_deep_gray px-4 py-2 rounded-full border-dong_light_gray border-solid border-[0.063rem] "
          >
            작성 취소
          </button>
        </div>
      </div>
    </div>
  )
}
