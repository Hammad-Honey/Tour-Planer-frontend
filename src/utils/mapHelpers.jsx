import mapboxgl from "mapbox-gl";

export const addMarker = (map, locations) => {
  console.log(locations);
  const { lng, lat } = locations;
  let marker = new mapboxgl.Marker({ color: "#2c00f189", scale: "1" })
    .setLngLat([lng, lat])
    .addTo(map);
  return marker;
};

export const customMarkers = (map, locations) => {
  let marker;
  locations.forEach((loc) => {
    const el = document.createElement("div");
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "cover";
    el.className = "custom-marker";
    marker = new mapboxgl.Marker({ element: el, draggable: true })
      .setLngLat([loc.lng, loc.lat])
      .addTo(map);
  });
  return marker;
};

export const popupBuilder = (title, discription) => {
  return new mapboxgl.Popup().setHTML(`<h3>${title}</h3><p>${discription}</p>`);
};

//Event listners for drag events

export const addMarkerEvents = (marker) => {
  marker.on("drag", () => {
    const lngLat = marker.getLngLat();
    console.log("Dragging:", lngLat);
  });

  marker.on("dragend", () => {
    const lngLat = marker.getLngLat();
    console.log("Dropped at:", lngLat);
  });
};

//Click Evernt Listnre
export const clickMarker = (map, locations) => {
  let marker;
  const el = document.createElement("div");
  el.style.width = "40px";
  el.style.height = "40px";
  el.style.backgroundSize = "cover";
  el.style.backgroundImage = `url(${logo})`;
  el.className = "custom-marker";

  // add click event
  el.addEventListener("click", () => {
    console.log("Marker clicked!");
    // respond to the click event here
  });

  marker = new mapboxgl.Marker(el)
    .setLngLat([70.24066469880967, 31.989800013292694])
    .addTo(map);

  return marker;
};
// Adding Marker onclick on map
export const markerOnClick = () => {};

// Get User Location
export const locationButton = (map) => {
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    }),
    "bottom-right",
  );
};

export const zoomInOutControls = (map) => {
  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
};

export const fullScreenButton = (map) => {
  map.addControl(new mapboxgl.FullscreenControl());
};

export const compass = (map) => {
  map.addControl(new mapboxgl.compass());
};
