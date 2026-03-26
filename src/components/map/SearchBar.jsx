import { useState, useRef } from "react";
import { useMap } from "../../contexts/MapContext";

const SearchBar = () => {
  const { addMarkerWithPopup, clearMarkers, mapState } = useMap();
  const debounceRef = useRef(null);
  const [query, setQuery] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    console.log(query)

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

  const fetchCity = async () => {
    // try {
    //   const results = await getCityLocation(searchQuery);
    //   console.log(results);
    //   const payload = {
    //     radius: 20,
    //     lng: results.lon,
    //     lat: results.lat
    //   }
    //   const places = await getHistoricLocations(payload)
    //   console.log("places", places)
    //   // You can also add markers here if needed
    //   // results.forEach(item => addMarkerWithPopup(item));
    // } catch (error) {
    //   console.error("Error fetching city:", error);
    // }
  };

  return (
      <div>
        <input
          type="text"
          placeholder="Search a destination"
          onChange={handleChange}
          className="rounded-full outline-none w-full bg-white shadow-xl/30 p-3 "
        />
      </div>
  );
};

export default SearchBar;