import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Place {
  place_name: string;
  address_name: string;
  category_group_name: string;
  phone: string;
  x: string; // 경도
  y: string; // 위도
}

interface PlaceData {
  latitude: string;
  longitude: string;
  plcaeName: string;
  category: string;
}

export const KakaoMap = ({ categories }: { categories: string[] }) => {
  const [map, setMap] = useState<any>(null);
  const [location, setLocation] = useState({
    latitude: 33.450701,
    longitude: 126.570667,
  });
  const [markers, setMarkers] = useState<any[]>([]);

  const locationState = useLocation().state as { keyword?: string };
  const keyword = locationState?.keyword || "";
  const navigate = useNavigate();

  const postPlaceInfo = async (data: PlaceData) => {
    try {
      const response = await fetch(
        "https://api.circleme.site/api/place/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzODA0NzY5MjUyIiwiaWF0IjoxNzMyMzcyNzM4LCJleHAiOjE3MzI0NTkxMzh9.oL0THgxo6JKL-sNDsyhdzpGUroVNfWCvjlNVvAnuX0g",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // 현재 위치 가져오기
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

  // 지도 초기화
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
      const mapInstance = new window.kakao.maps.Map(container, options);
      setMap(mapInstance);

      const currentLocationMarkerImage = new window.kakao.maps.MarkerImage(
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
        new window.kakao.maps.Size(24, 35),
      );

      // 현재 위치 마커 표시
      const currentLocationMarker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        ),
        map: mapInstance,
        image: currentLocationMarkerImage,
      });

      // setMarkers((prevMarkers) => [...prevMarkers, currentLocationMarker]);
      setMarkers([currentLocationMarker]);
    }
  }, [location]);

  // 키워드 검색 및 마커 표시
  useEffect(() => {
    if (map) {
      const ps = new window.kakao.maps.services.Places();

      // 이전 마커 삭제

      markers.forEach((marker) => marker.setMap(null));
      setMarkers([]);

      categories.forEach((category) => {
        ps.categorySearch(
          category,
          (data: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const newMarkers = data.map((place: any) => {
                const marker = new window.kakao.maps.Marker({
                  position: new window.kakao.maps.LatLng(place.y, place.x),
                  map: map,
                });

                const infoWindow = new window.kakao.maps.InfoWindow({
                  content: `<div>${place.place_name}</div>`,
                });

                // 마커 클릭 이벤트
                window.kakao.maps.event.addListener(marker, "click", () => {
                  infoWindow.open(map, marker);
                  navigate("/circle-me/market", { state: { place } });
                });

                return marker;
              });

              setMarkers((prevMarkers) => [...prevMarkers, ...newMarkers]);
            }
          },
          {
            location: new window.kakao.maps.LatLng(
              location.latitude,
              location.longitude,
            ),
            radius: 20000,
          },
        );
      });

      // 키워드 검색
      if (keyword) {
        ps.keywordSearch(
          keyword,
          (data: Place[], status: string) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const bounds = new window.kakao.maps.LatLngBounds();

              const keywordMarkers = data.map((place) => {
                const marker = new window.kakao.maps.Marker({
                  position: new window.kakao.maps.LatLng(place.y, place.x),
                  map: map,
                });

                const infowindow = new window.kakao.maps.InfoWindow({
                  content: `<div style="padding:5px;">${place.place_name}</div>`,
                });

                // 마커 클릭 이벤트
                window.kakao.maps.event.addListener(marker, "click", () => {
                  infowindow.open(map, marker);

                  const placeInfo = {
                    latitude: place.y,
                    longitude: place.x,
                    plcaeName: place.place_name,
                    category: place.category_group_name,
                  };

                  console.log(placeInfo);
                  postPlaceInfo(placeInfo);
                  // 장소 데이터를 MarketPage로 전달
                  navigate("/circle-me/market", { state: { place } });
                });

                bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
                return marker;
              });

              setMarkers((prevMarkers) => [...prevMarkers, ...keywordMarkers]);
              map.setBounds(bounds); //지도 범위 설정
            } else {
              alert("검색 결과가 없습니다.");
            }
          },
          {
            location: new window.kakao.maps.LatLng(
              location.latitude,
              location.longitude,
            ),
            radius: 20000, // 반경 20km
          },
        );
      }
    }
  }, [categories, keyword, map]);

  return <div id="map" className="w-full h-[75vh]" />;
};
