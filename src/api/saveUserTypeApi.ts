const BASE_URL = "https://api.circleme.site";

// 사용자 유형 저장 API 함수
export const postUserType = async (userType: string): Promise<any> => {
  try {
    console.log("Sending user type:", userType);

    const response = await fetch(`${BASE_URL}/api/user/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 쿠키 포함 설정
      body: JSON.stringify({ userType }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to save user type: ${response.status} ${response.statusText}`,
      );
    }

    const result = await response.json();
    console.log("API Response:", result);
    return result;
  } catch (error) {
    console.error("There was a problem with the request:", error);
    throw error;
  }
};
