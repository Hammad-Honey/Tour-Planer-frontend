import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";
import { useMap } from "../../contexts/MapContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity, fetchLocations } from "../../store/slices/locationSlice";
import { addMarker } from "../../utils/mapHelpers";
import { searchSuggestions } from "../../APIs/mapServices";
const SearchBar = () => {
  const { markersRef, addMarkers, clearMarkers, placesFilter, mapRef } = useMap();
  const [suggestions, setSuggetions] = useState(null);
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const debounceRef = useRef(null);
  const cityData = useSelector((state) => state.map.cityData);
  const dispatch = useDispatch();

  const displaySuggestion = (suggestions) => {
    return Object.values(suggestions).map((item) => {
      console.log("Signle Suggestions", item);
      if (
        item.id.includes("place") ||
        item.id.includes("country") ||
        item.id.includes("locality") ||
        item.id.includes("region")
      ) {
        return (
          <>
            <button
              key={item.id}
              onClick={() => {
                console.log(item.geometry.coordinates);
                setSearchFieldValue(item.text);
              }}
              className="p-3"
            >
              {item.place_name}
            </button>
          </>
        );
      }
    });
  };

  //Handle Input Data
  const handleChange = async (e) => {
    const inputValue = e.target.value;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    if (inputValue.trim().length > 2) {
      debounceRef.current = setTimeout(() => {
        searchSuggestions(inputValue).then((result) => {
          setSuggetions(result); //setting the data in the state to be used by other functions
        });
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    const input = document.getElementById("forminput").value;
    console.log("form Submitted _input : ", input);
    dispatch(fetchCity({ city: input })).then((result) => {
      if (!result.payload) return;
      const { lon, lat } = result.payload;
      // move map
      mapRef.current?.flyTo({
        center: [lon, lat],
        zoom: 10,
        essential: true,
      });
    });
  };

  return (
    <div className="relative">
      <form
        className="rounded-4xl outline-none bg-white shadow-xl/30"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="relative">
          <input
            id="forminput"
            name="SearchField"
            type="text"
            placeholder="Search a destination"
            onChange={(e) => {
              setSearchFieldValue(e.target.value);
              clearMarkers(); // 🔥 ADD THIS
              handleChange(e);
            }}
            value={searchFieldValue}
            className="p-3 outline-none w-full"
          />

          <div className="absolute  right-4 top-1/2 transform  -translate-y-1/2">
            <button type="submit">
              <FaSearch color="#827d7d" />
            </button>
          </div>
        </div>
        {suggestions ? (
          <>
            <div id="optionsDiv">{displaySuggestion(suggestions)}</div>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default SearchBar;
