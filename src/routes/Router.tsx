import { Layout } from "../layout";
import { Page404 } from "../pages/_404/Page404";
import { LoginPage } from "../pages/01-login/LoginPage";
import { AcceptPage } from "../pages/02-accept/AcceptPage";
import { TypeSelectPage } from "../pages/03-type/TypeSelectPage";
import { StartPage } from "../pages/03-done/StartPage";
import { MainPage } from "../pages/04-main/MainPage";
import { MyPage } from "../pages/08-profile/MyPage";
import { ProfileEditPage } from "../pages/08-edit/ProfileEditPage";
import { ExploreSurroundings } from "../pages/08-explore/ExploreSurroundings";
import { ExploreType } from "../pages/03-exploreType/ExploreType";
import { ExploreTheme } from "../pages/08-exploreTheme/ExploreTheme";
import { CategoryPage } from "../pages/08-category/CategoryPage";
import { BookmarkPage } from "../pages/05-bookmark/BookmarkPage";
import { MyReviewPage } from "../pages/06-myReview/MyReviewPage";
import { ReviewSubmitPage } from "../pages/06-submit/ReviewSubmitPage";
import { MarketPage } from "../pages/05-market/MarketPage";
import { ReviewDetailPage } from "../pages/06-reviewDetail/ReviewDetailPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <Page404 /> },
      { path: "/", element: <LoginPage /> },
      { path: "accept", element: <AcceptPage /> },
      { path: "types", element: <TypeSelectPage /> },
      { path: "done", element: <StartPage /> },
      { path: "circle-me", element: <MainPage /> },
      { path: "circle-me/profile", element: <MyPage /> },
      { path: "circle-me/profile/edit", element: <ProfileEditPage /> },
      { path: "circle-me/profile/edit/types", element: <TypeSelectPage /> },
      {
        path: "circle-me/explore/surroundings",
        element: <ExploreSurroundings />,
      },
      {
        path: "circle-me/explore/surroundings/theme",
        element: <ExploreTheme />,
      },
      { path: "circle-me/explore/surroundings/type", element: <ExploreType /> },
      { path: "circle-me/category/:theme", element: <CategoryPage /> },
      { path: "circle-me/bookmark", element: <BookmarkPage /> },
      { path: "circle-me/review", element: <MyReviewPage /> },
      { path: "circle-me/submit", element: <ReviewSubmitPage /> },
      { path: "circle-me/market", element: <MarketPage /> },
      { path: "circle-me/review/:id", element: <ReviewDetailPage /> },
    ],
  },
];
