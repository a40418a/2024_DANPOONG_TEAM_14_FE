import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export const KakaoMap = ({ categories }: { categories: string[] }) => {
  const [location, setLocation] = useState({
    latitude: 37.566826,
    longitude: 126.9786567,
  });
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);

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
          (data: any, status: any, pagination: any) => {
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
    }
  }, [categories, map]);

  return <div id="map" className="w-full h-[75vh]" />;
};
