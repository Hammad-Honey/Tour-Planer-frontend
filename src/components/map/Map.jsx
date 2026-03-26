import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
import { useMap } from "../../contexts/MapContext";

function Map() {
    const mapContainer = useRef(null)
    const { setMap, mapState, setMapState} = useMap();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            center: mapState.center,
            zoom: mapState.zoom,
            style: 'mapbox://styles/mapbox/standard',
        });

        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        });
        map.addControl(geolocate, "bottom-right");
        geolocate.on("geolocate", (e) => {
            const lat = e.coords.latitude;
            const lng = e.coords.longitude;
            setMapState(lng,lat, 7)
        });
        map.addControl(new mapboxgl.NavigationControl());
        setMap(map);




        return () => map.remove();

        // Add zoom and rotation controls to the map.


    }, [])

    return (

        <div ref={mapContainer} style={{ height: "100vh" }}></div>

    )


};

export default Map;
