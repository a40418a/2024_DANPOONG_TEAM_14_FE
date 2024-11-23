import axios from "axios";

// 가게 리뷰 리스트 조회 API
export interface Review {
  reviewId: number;
  title: string;
  content: string;
  score: "GOOD" | "SOSO" | "BAD";
  likeNum: number;
  commentNum: number;
  userInfo: {
    userId: number;
    userName: string;
    userType: "DISABLED" | "ASSISTANCE_DOG" | "ELDERLY" | "CHILD";
    profileImageUrl: string;
  };
  placeName: string;
  liked: boolean;
  imageUrl: string[];
}

export interface MarketReviewResponse {
  status: string;
  data: {
    reviews: Review[];
    placeName: string;
    reviewNum: number;
    good: number;
    soso: number;
    bad: number;
  };
  message: string;
}

export const getMarketReview = async (
  placeId: number,
): Promise<MarketReviewResponse> => {
  try {
    const response = await axios.get<MarketReviewResponse>(
      `https://api.circleme.site/api/review/getPlaceReviews`,
      {
        params: { placeId },
        withCredentials: true, // 쿠키 포함 설정
      },
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch market reviews:", error);
    throw error;
  }
};
