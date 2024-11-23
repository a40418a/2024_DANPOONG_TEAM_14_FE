import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL || "";

// API 응답 타입 정의
export interface UserInfoResponse {
  status: string;
  data: {
    kakaoId: string;
    username: string;
    email: string;
    profileImageUrl: string;
    userType: string; // 예: DISABLED, ASSISTANCE_DOG 등
    reviewNum: number;
    bookmarkNum: number;
    profileImageUpdated: boolean;
  };
  message: string;
}

// 사용자 정보 조회 API 함수
export const getUserInfo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/user/my`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    throw error;
  }
};
