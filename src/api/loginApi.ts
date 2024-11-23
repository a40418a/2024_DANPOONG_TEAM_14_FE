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

// 회원 탈퇴 API 함수
export const deleteUser = async (): Promise<void> => {
  try {
    const response = await axios.delete(
      `https://api.circleme.site/api/user/delete`,
      {
        withCredentials: true, // 쿠키 포함 설정
      },
    );
    console.log("User deleted successfully:", response.data);
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw error;
  }
};
