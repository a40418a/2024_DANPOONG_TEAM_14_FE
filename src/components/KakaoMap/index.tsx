import { useEffect, useState } from "react"

declare global {
  interface Window {
    kakao: any
  }
}

export const KakaoMap = () => {
  const [location, setLocation] = useState({
    latitude: 33.450701,
    longitude: 126.570667,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        })
      },
      (err) => {
        console.error("Error Code = " + err.code + " - " + err.message)
      },
      { enableHighAccuracy: true },
    )
  }, [])

  useEffect(() => {
    const container = document.getElementById("map")
    if (container) {
      const options = {
        center: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        ),
        level: 3,
      }
      const map = new window.kakao.maps.Map(container, options)

      const markerPosition = new window.kakao.maps.LatLng(
        location.latitude,
        location.longitude,
      )
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      })
      marker.setMap(map)
    }
  }, [location])

  return <div id="map" className="w-[24.563rem] h-[39.563rem]" />
}
