import { createContext, useContext, useState, useRef, use } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContext = createContext();


export function MapProvider({ children }) {
    const historical_places = [
    {"area_name": "Mohenjo-daro", "city": "Larkana", "province": "Sindh", "lat": 27.3255, "lng": 68.1368, "exploration_time": "2-3 hours"},
    {"area_name": "Harappa Ruins", "city": "Sahiwal", "province": "Punjab", "lat": 30.6272, "lng": 72.8631, "exploration_time": "2 hours"},
    {"area_name": "Taxila Ruins", "city": "Taxila", "province": "Punjab", "lat": 33.7480, "lng": 72.8205, "exploration_time": "3 hours"},
    {"area_name": "Takht-i-Bahi", "city": "Mardan", "province": "KPK", "lat": 34.3197, "lng": 71.9511, "exploration_time": "2 hours"},
    {"area_name": "Rohtas Fort", "city": "Dina", "province": "Punjab", "lat": 32.9658, "lng": 73.5786, "exploration_time": "3 hours"},
    {"area_name": "Lahore Fort", "city": "Lahore", "province": "Punjab", "lat": 31.5880, "lng": 74.3153, "exploration_time": "2 hours"},
    {"area_name": "Badshahi Mosque", "city": "Lahore", "province": "Punjab", "lat": 31.5882, "lng": 74.3106, "exploration_time": "1 hour"},
    {"area_name": "Shalimar Gardens", "city": "Lahore", "province": "Punjab", "lat": 31.5855, "lng": 74.3820, "exploration_time": "1.5 hours"},
    {"area_name": "Minar-e-Pakistan", "city": "Lahore", "province": "Punjab", "lat": 31.5925, "lng": 74.3095, "exploration_time": "1 hour"},
    {"area_name": "Tomb of Jahangir", "city": "Lahore", "province": "Punjab", "lat": 31.6219, "lng": 74.2828, "exploration_time": "1 hour"},
    {"area_name": "Makli Necropolis", "city": "Thatta", "province": "Sindh", "lat": 24.7508, "lng": 67.9011, "exploration_time": "3 hours"},
    {"area_name": "Ranikot Fort", "city": "Jamshoro", "province": "Sindh", "lat": 25.8920, "lng": 67.9056, "exploration_time": "3-4 hours"},
    {"area_name": "Banbhore Ruins", "city": "Thatta", "province": "Sindh", "lat": 24.7525, "lng": 67.5358, "exploration_time": "2 hours"},
    {"area_name": "Derawar Fort", "city": "Bahawalpur", "province": "Punjab", "lat": 28.7675, "lng": 71.3340, "exploration_time": "2 hours"},
    {"area_name": "Noor Mahal", "city": "Bahawalpur", "province": "Punjab", "lat": 29.3956, "lng": 71.6830, "exploration_time": "1 hour"},
    {"area_name": "Katas Raj Temples", "city": "Chakwal", "province": "Punjab", "lat": 32.7247, "lng": 72.9514, "exploration_time": "1.5 hours"},
    {"area_name": "Hiran Minar", "city": "Sheikhupura", "province": "Punjab", "lat": 31.7410, "lng": 73.9619, "exploration_time": "1 hour"},
    {"area_name": "Baltit Fort", "city": "Hunza", "province": "Gilgit-Baltistan", "lat": 36.3262, "lng": 74.6716, "exploration_time": "1 hour"},
    {"area_name": "Altit Fort", "city": "Hunza", "province": "Gilgit-Baltistan", "lat": 36.3147, "lng": 74.6875, "exploration_time": "1 hour"},
    {"area_name": "Bala Hissar Fort", "city": "Peshawar", "province": "KPK", "lat": 34.0142, "lng": 71.5686, "exploration_time": "1 hour"},
    {"area_name": "Rawat Fort", "city": "Rawalpindi", "province": "Punjab", "lat": 33.4981, "lng": 73.3039, "exploration_time": "1 hour"},
    {"area_name": "Pharwala Fort", "city": "Rawalpindi", "province": "Punjab", "lat": 33.6190, "lng": 73.2980, "exploration_time": "1 hour"},
    {"area_name": "Mankiala Stupa", "city": "Rawalpindi", "province": "Punjab", "lat": 33.4475, "lng": 73.2847, "exploration_time": "1 hour"},
    {"area_name": "Shah Jahan Mosque", "city": "Thatta", "province": "Sindh", "lat": 24.7475, "lng": 67.9235, "exploration_time": "1 hour"},
    {"area_name": "Chaukhandi Tombs", "city": "Karachi", "province": "Sindh", "lat": 24.8647, "lng": 67.2694, "exploration_time": "1 hour"},
    {"area_name": "Frere Hall", "city": "Karachi", "province": "Sindh", "lat": 24.8475, "lng": 67.0328, "exploration_time": "45 minutes"},
    {"area_name": "Mohatta Palace", "city": "Karachi", "province": "Sindh", "lat": 24.8139, "lng": 67.0336, "exploration_time": "1 hour"},
    {"area_name": "Quaid-e-Azam Mausoleum", "city": "Karachi", "province": "Sindh", "lat": 24.8753, "lng": 67.0408, "exploration_time": "1 hour"},
    {"area_name": "Wazir Khan Mosque", "city": "Lahore", "province": "Punjab", "lat": 31.5828, "lng": 74.3235, "exploration_time": "45 minutes"},
    {"area_name": "Sunehri Mosque", "city": "Lahore", "province": "Punjab", "lat": 31.5819, "lng": 74.3214, "exploration_time": "30 minutes"},
    {"area_name": "Shahi Hammam", "city": "Lahore", "province": "Punjab", "lat": 31.5823, "lng": 74.3252, "exploration_time": "45 minutes"},
    {"area_name": "Tomb of Nur Jahan", "city": "Lahore", "province": "Punjab", "lat": 31.6148, "lng": 74.2801, "exploration_time": "45 minutes"},
    {"area_name": "Anarkali Tomb", "city": "Lahore", "province": "Punjab", "lat": 31.5654, "lng": 74.3094, "exploration_time": "30 minutes"},
    {"area_name": "Tomb of Dai Anga", "city": "Lahore", "province": "Punjab", "lat": 31.5802, "lng": 74.3364, "exploration_time": "30 minutes"},
    {"area_name": "Sheesh Mahal", "city": "Lahore", "province": "Punjab", "lat": 31.5891, "lng": 74.3146, "exploration_time": "30 minutes"},
    {"area_name": "Hazuri Bagh", "city": "Lahore", "province": "Punjab", "lat": 31.5885, "lng": 74.3120, "exploration_time": "30 minutes"},
    {"area_name": "Kamran's Baradari", "city": "Lahore", "province": "Punjab", "lat": 31.6033, "lng": 74.2981, "exploration_time": "45 minutes"},
    {"area_name": "Shigar Fort", "city": "Skardu", "province": "Gilgit-Baltistan", "lat": 35.4219, "lng": 75.7381, "exploration_time": "1 hour"},
    {"area_name": "Khaplu Palace", "city": "Khaplu", "province": "Gilgit-Baltistan", "lat": 35.1438, "lng": 76.3331, "exploration_time": "1 hour"},
    {"area_name": "Skardu Fort", "city": "Skardu", "province": "Gilgit-Baltistan", "lat": 35.3039, "lng": 75.6364, "exploration_time": "1 hour"},
    {"area_name": "Uch Sharif Tombs", "city": "Bahawalpur", "province": "Punjab", "lat": 29.2330, "lng": 71.0667, "exploration_time": "1 hour"},
    {"area_name": "Tomb of Rukn-e-Alam", "city": "Multan", "province": "Punjab", "lat": 30.1991, "lng": 71.4687, "exploration_time": "1 hour"},
    {"area_name": "Multan Fort", "city": "Multan", "province": "Punjab", "lat": 30.1983, "lng": 71.4694, "exploration_time": "1 hour"},
    {"area_name": "Ghanta Ghar Faisalabad", "city": "Faisalabad", "province": "Punjab", "lat": 31.4187, "lng": 73.0791, "exploration_time": "30 minutes"},
    {"area_name": "Empress Market", "city": "Karachi", "province": "Sindh", "lat": 24.8617, "lng": 67.0305, "exploration_time": "45 minutes"}

]
    
    const mapRef = useRef(null);
    const [markers, setMarkers] = useState([])
    const [mapState, setState] = useState({
        center: [74.3587, 31.5204], // default center
        zoom: 5,
    });

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

        <MapContext.Provider value={{ setMap, addMarkerWithPopup, clearMarkers, markers, historical_places, mapState,setMapState }}>
            {children}
        </MapContext.Provider>
    )
}


export function useMap() {
    const context = useContext(MapContext);
    if (!context) throw new Error("useMap must be used within a MapProvider")
    return context
}