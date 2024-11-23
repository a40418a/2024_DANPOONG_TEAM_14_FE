import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

declare global {
  interface Window {
    kakao: any;
  }
}

// 카카오 지도 API의 장소 타입 정의
interface Place {
  id: string;
  place_name: string;
  address_name: string;
  phone: string;
  x: string; // 경도
  y: string; // 위도
}

export const KakaoMap = () => {
  const locationState = useLocation().state as { keyword?: string };
  const keyword = locationState?.keyword || ""; // 기본값 빈 문자열
  const [location, setLocation] = useState({
    latitude: 33.450701,
    longitude: 126.570667,
  });
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Error Code = " + err.code + " - " + err.message);
      },
      { enableHighAccuracy: true },
    );
  }, []);

  useEffect(() => {
    const container = document.getElementById("map");
    if (container) {
      const options = {
        center: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        ),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

      // 현재 위치 마커 표시
      const currentMarker = new window.kakao.maps.Marker({
        map,
        position: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        ),
      });

      // 키워드 검색 실행
      if (keyword) {
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(keyword, (data: Place[], status: string) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const bounds = new window.kakao.maps.LatLngBounds();

            data.forEach((place) => {
              const placeMarker = new window.kakao.maps.Marker({
                map,
                position: new window.kakao.maps.LatLng(place.y, place.x),
              });

              // 마커 클릭 이벤트
              window.kakao.maps.event.addListener(placeMarker, "click", () => {
                infowindow.setContent(
                  `<div style="padding:5px;">${place.place_name}</div>`,
                );
                infowindow.open(map, placeMarker);

                // 장소 데이터를 MarketPage로 전달
                navigate("/circle-me/market", { state: { place } });
              });

              bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
            });

            map.setBounds(bounds);
          } else {
            alert("검색 결과가 없습니다.");
          }
        });
      }
    }
  }, [location, keyword]);

  return <div id="map" className="w-full h-[75vh]" />;
};
