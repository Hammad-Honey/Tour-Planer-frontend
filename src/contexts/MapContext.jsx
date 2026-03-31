import { createContext, useContext, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContext = createContext();

export function MapProvider({ children }) {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [useLocation, setUserLocation] = useState({ lon: null, lat: null }); // Not useed so far
  const [placesFilter, setplacesFilter] = useState("");
  const [cityToVisit, setCityToVisit] = useState({});
  const [visitPlaces, setVisitPlaces] = useState({});

  const setCity = (parms) => {
    setCityToVisit(parms);
  };
  const resetCity = () => {
    setCityToVisit({});
  };

  const setPlaces = (parms) => {
    setVisitPlaces(parms);
  };

  const resetPlaces = () => {
    setVisitPlaces({});
  };

  const setFilter = (filterValue) => {
    setplacesFilter(filterValue);
  };

  const setMap = (mapInstance) => {
    mapRef.current = mapInstance;
  };

  const addMarkers = (marker) => {
    markersRef.current.push(marker);
  };

  const clearMarkers = () => {
    console.log("markers being removed");

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
  };

  return (
    <MapContext.Provider
      value={{
        mapRef,
        setMap,
        setCity,
        resetCity,
        cityToVisit,
        visitPlaces,
        setPlaces,
        resetPlaces,
        clearMarkers,
        addMarkers,
        markersRef,
        setFilter,
        placesFilter,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMap() {
  const context = useContext(MapContext);
  if (!context) throw new Error("useMap must be used within a MapProvider");
  return context;
}
