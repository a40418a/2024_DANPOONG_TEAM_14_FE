import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL || "";

export interface SaveUserTypeResponse {
  status: string;
  data: number;
  message: string;
}

// 사용자 유형 저장 API 함수
export const postUserType = async (userType: string): Promise<any> => {
  try {
    console.log("Sending user type:", userType);

    const response = await axios.post(
      `${BASE_URL}/api/user/save`,
      { userType },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // 쿠키 포함 설정
      },
    );

    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the request:", error);
    throw error;
  }
};
