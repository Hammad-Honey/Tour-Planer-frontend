import { createContext, useContext, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContext = createContext();


export function MapProvider({ children }) {
    const mapRef = useRef(null);
    const [markers, setMarkers] = useState([])
    const [placesFilter,setplacesFilter]=useState({
        kinds:''
    })



    const [mapState, setState] = useState({
        center: [74.3587, 31.5204], // default center
        zoom: 5,
    });
    const setFilter=(filterValue)=>{
        setplacesFilter((prev)=>({...prev,kinds:filterValue}))
    }
    const setMapState=(lng, lat, zoom)=>{
        setState(prev=>({...prev ,center:[lng,lat], zoom:zoom}))
     }

    const setMap = (mapInstance) => {
        mapRef.current = mapInstance;
    }

    const addMarkerWithPopup = (location) => {
        const {lat, lng, area_name, city, province, exploration_time}=location

        const popup = new mapboxgl.Popup({ offset: 10 })
            .setHTML(`
                <div class="popup">
                    <h3>${area_name}</h3>
                    <p>Visit Time: ${exploration_time}</p>
                </div>
             `);

        const marker = new mapboxgl.Marker({ color: "#880808" })
            .setLngLat([lng, lat])
            .setPopup(popup)
            .addTo(mapRef.current);

        
        marker.placeData= {area_name, city,exploration_time}
        setMarkers((prev) => [...prev, marker])


        return marker;
    };
    const clearMarkers = () => {
        markers.forEach((marker) => { marker.remove() })
        setMarkers([])
    }


    return (

        <MapContext.Provider value={{ setMap, addMarkerWithPopup, clearMarkers, markers, mapState,setMapState ,setFilter}}>
            {children}
        </MapContext.Provider>
    )
}


export function useMap() {
    const context = useContext(MapContext);
    if (!context) throw new Error("useMap must be used within a MapProvider")
    return context
}