import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Place {
  id: string;
  place_name: string;
  address_name: string;
  phone: string;
  x: string; // 경도
  y: string; // 위도
}

export const KakaoMap = ({ categories }: { categories: string[] }) => {
  const [map, setMap] = useState<any>(null);
  const [location, setLocation] = useState({
    latitude: 33.450701,
    longitude: 126.570667,
  });
  const [markers, setMarkers] = useState<any[]>([]);
  const [keyword, _setKeyword] = useState("");

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

    const currentLocationMarker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(
        location.latitude,
        location.longitude,
      ),
      map: mapInstance,
      image: currentLocationMarkerImage,
    });

    setMarkers((prevMarkers) => [...prevMarkers, currentLocationMarker]);
  }, [location]);

  useEffect(() => {
    if (map) {
      const ps = new window.kakao.maps.services.Places();

      markers.forEach((marker) => marker.setMap(null));
      setMarkers([]);

      categories.forEach((category) => {
        ps.categorySearch(
          category,
          (data: any, status: any, _pagination: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              console.log(data);
              const newMarkers = data.map((place: any) => {
                const marker = new window.kakao.maps.Marker({
                  position: new window.kakao.maps.LatLng(place.y, place.x),
                  map: map,
                });

                const infoWindow = new window.kakao.maps.InfoWindow({
                  content: `<div>${place.place_name}</div>`,
                });

                // 마커 클릭 이벤트
                window.kakao.maps.event.addListener(marker, "mousedown", () => {
                  infoWindow.open(map, marker);
                });

                window.kakao.maps.event.addListener(marker, "mouseup", () => {
                  infoWindow.close();
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
        ps.keywordSearch(keyword, (data: Place[], status: string) => {
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
              });

              bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
              return marker;
            });

            setMarkers((prevMarkers) => [...prevMarkers, ...keywordMarkers]);
            map.setBounds(bounds);
          } else {
            alert("검색 결과가 없습니다.");
          }
        });
      }
    }
  }, [categories, keyword, map]);

  return <div id="map" className="w-full h-[75vh]" />;
};
