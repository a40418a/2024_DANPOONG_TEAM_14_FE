import axios from "axios";

// 로그아웃 API 함수
export const logoutUser = async (): Promise<void> => {
  try {
    const response = await axios.post(
      `https://api.circleme.site/api/token/logout`,
      {},
      {
        withCredentials: true, // 쿠키 포함 설정
      },
    );
    console.log("Logged out successfully:", response.data);
  } catch (error) {
    console.error("Failed to log out:", error);
    throw error;
  }
};
