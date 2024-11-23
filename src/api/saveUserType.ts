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
    console.log(userType);
    const response = await fetch(`${BASE_URL}/api/user/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userType }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save user type: ${response.status}`);
    }
    const result: SaveUserTypeResponse = await response.json();
    console.log("API Response:", result); // 응답 확인
    return result;
  } catch (error) {
    console.error("Error saving user type:", error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
