import axios from "axios";

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

export interface UpdateUserInfoResponse {
  status: string;
  data: number;
  message: string;
}

// 사용자 정보 조회 API 함수
export const getUserInfo = async (): Promise<UserInfoResponse> => {
  try {
    const response = await axios.get<UserInfoResponse>(
      `https://api.circleme.site/api/user/my`,
      {
        withCredentials: true, // 쿠키 포함
      },
    );
    console.log("Fetched user info:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    throw error;
  }
};

// 사용자 정보 수정 API 함수
export const updateUserInfo = async (
  userType: string,
): Promise<UpdateUserInfoResponse> => {
  try {
    console.log("Updating user type:", userType);

    const response = await axios.patch<UpdateUserInfoResponse>(
      `https://api.circleme.site/api/user/update`,
      { userType },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // 쿠키 포함
      },
    );

    console.log("Update Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to update user info:", error);
    throw error;
  }
};
