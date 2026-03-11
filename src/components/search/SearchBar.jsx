// import { useEffect, useState } from "react";
// import { useMap } from "../../contexts/MapContext";
// import { getHistoricLocations, getCityLocation } from '../../APIs/openTripMap'


// const SearchBar = () => {
//   const { addMarkerWithPopup, clearMarkers, mapState } = useMap()
//   const [query, setQuery] = useState("")

//   // const historical_places = getHistoricLocations(2000, mapState.center[0], mapState.center[1])



//   async function HelloCity(parms) {
//     const x = await getCityLocation(query)
//     console.log(x);
    
//   }


//   // return historical_places.filter(place=> place.city.toLowerCase().includes(query.toLowerCase()));
      
//   useEffect(() => {
//       if (query > 2) {
//         HelloCity(query)       
//       }
//   }, [query])



//   const handleChange = (e) => {
//     clearMarkers()
//     setQuery(e.target.value);
//     if (!e.target.value.trim("")) return;
//     // result.forEach((item)=>{addMarkerWithPopup(item)})
//     console.log(e.target.value)
//   };






//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={handleChange}
//         className="rounded outline-none w-full"
//       />
//     </div>
//   );
// };

// export default SearchBar;



import { useState, useRef } from "react";
import { useMap } from "../../contexts/MapContext";
import { getHistoricLocations, getCityLocation } from '../../APIs/openTripMap';

const SearchBar = () => {
  const { addMarkerWithPopup, clearMarkers, mapState } = useMap();
  const [query, setQuery] = useState("");
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    clearMarkers();

    // Clear previous debounce timer
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // Only run if input length > 2
    if (value.trim().length > 2) {
      // Set a new debounce timer
      debounceRef.current = setTimeout(() => {
        fetchCity(value);
      }, 500); // 500ms delay
    }
  };

  const fetchCity = async (searchQuery) => {
    try {
      const results = await getCityLocation(searchQuery);
      console.log(results);
      const payload = {
        radius: 20,
        lng: results.lon,
        lat: results.lat
      }
      const places = await getHistoricLocations(payload)
      console.log("places", places)
      // You can also add markers here if needed
      // results.forEach(item => addMarkerWithPopup(item));
    } catch (error) {
      console.error("Error fetching city:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        className="rounded outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;