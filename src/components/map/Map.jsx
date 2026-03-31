import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
import { useMap } from "../../contexts/MapContext";

function Map() {
  const mapContainer = useRef(null);
  const {setMap} = useMap();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [74.3587, 31.5204],
      zoom: 3,
      style: "mapbox://styles/mapbox/standard",
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    map.addControl(geolocate, "top-right");
    geolocate.on("geolocate", (e) => {
    //   const lat = e.coords.latitude;
    //   const lng = e.coords.longitude;
    });
    map.addControl(new mapboxgl.NavigationControl());
    
    setMap(map);

    return () => map.remove();


  }, []);

  return <div ref={mapContainer} style={{ height: "100vh" }}></div>;
}

export default Map;
