import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_API_URL || "";
export interface SaveUserTypeResponse {
  status: string;
  data: number;
  message: string;
}

// 사용자 유형 저장 API 함수
export const saveUserType = async (
  userType: string,
): Promise<SaveUserTypeResponse> => {
  try {
    console.log("Sending user type:", userType);
    const response = await axios.post<SaveUserTypeResponse>(
      `${BASE_URL}/api/user/save`,
      { userType },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log("API Response:", response.data); // 응답 데이터 확인
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("There was a problem with the request:", error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
