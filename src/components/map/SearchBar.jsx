import { FaSearch } from "react-icons/fa";
import { Fragment, useEffect, useRef, useState } from "react";
import { useMap } from "../../contexts/MapContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity, fetchLocations } from "../../store/slices/locationSlice";
import { addMarker } from "../../utils/mapHelpers";
import { searchSuggestions } from "../../APIs/mapServices";
const SearchBar = () => {
  const cityData = useSelector((state) => state.map.cityData);
  const { markersRef, addMarkers, clearMarkers, placesFilter, mapRef } = useMap();
  const [isCompleted, setIsCompleted] = useState(false);
  const [suggestions, setSuggetions] = useState(null);
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [location, setLocation] = useState({ lon: null, lat: null });
  const debounceRef = useRef(null);
  // const cityData = useSelector((state) => state.map.cityData);
  const dispatch = useDispatch();

  useEffect(() => {
    clearMarkers();
    console.log("placesFilter value", placesFilter);
    if (location) {
      dispatch(
        fetchLocations({
          radius: 20000,
          lng: location.lon,
          lat: location.lat,
          kinds: placesFilter || "interesting_places",
        }),
      ).then((result) => {
        console.log("result of fetch locs", result);
        const locationObjects = result.payload.features;
        console.log(locationObjects);
        Object.values(locationObjects).forEach((items) => {
          if (items.properties.name) {
            return addMarkers(
              addMarker(mapRef.current, {
                lng: items.geometry.coordinates[0],
                lat: items.geometry.coordinates[1],
              }),
            );
          }
        });
      });
    }
  }, [placesFilter]);

  const displaySuggestion = (suggestions) => {
    return Object.values(suggestions).map((item) => {
      if (item.id.includes("place") || item.id.includes("country") || item.id.includes("region")) {
        return (
          <Fragment key={item.id}>
            <div
              onClick={() => {
                setSearchFieldValue(item.text);
                console.log(item.text, "added to search");
                // setTimeout(() => {
                handleSubmit(item.text);
                // }, 0);
              }}
              className="p-3"
            >
              {item.place_name}
            </div>
          </Fragment>
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
          console.log(result);
          setSuggetions(result); //setting the data in the state to be used by other functions
        });
      }, 500);
    }
  };

  const handleSubmit = async (someData) => {
    console.log(someData);
    setIsCompleted(true);
    await dispatch(fetchCity({ city: searchFieldValue })).then((result) => {
      if (!result.payload) return;
      const { lon, lat } = result.payload;
      setLocation({ lon: lon, lat: lat });
      console.log("city info", result.payload);
      // move map

      console.log("places filter", placesFilter);
      dispatch(
        fetchLocations({
          radius: 20000,
          lng: lon,
          lat: lat,
          kinds: placesFilter || "interesting_places",
        }),
      ).then((result) => {
        console.log("result of fetch locs", result);
        const locationObjects = result.payload.features;
        console.log(locationObjects);
        Object.values(locationObjects).forEach((items) => {
          if (items.properties.name) {
            return addMarkers(
              addMarker(mapRef.current, {
                lng: items.geometry.coordinates[0],
                lat: items.geometry.coordinates[1],
              }),
            );
          }
        });
      });

      mapRef.current?.flyTo({
        center: [lon, lat],
        zoom: 10,
      });
    });
  };

  const locationForPins = () => {
    // setTimeout(() => {
    console.log("cityData", cityData);
    dispatch(
      fetchLocations({
        radius: 20000,
        lng: cityData.lon,
        lat: cityData.lat,
        kinds: placesFilter || "interesting_places",
      }),
    ).then((result) => {
      console.log("result of fetch locs", result);
      const locationObjects = result.payload.features;
      console.log(locationObjects);
      Object.values(locationObjects).forEach((items) => {
        if (items.properties.name) {
          return addMarkers(
            addMarker(mapRef.current, {
              lng: items.geometry.coordinates[0],
              lat: items.geometry.coordinates[1],
            }),
          );
        }
      });
    });
    // });
  };

  return (
    <div className="relative">
      <form
        className="rounded-4xl outline-none bg-white shadow-xl/30"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="relative">
          <input
            id="forminput"
            name="SearchField"
            type="text"
            placeholder="Search a destination"
            onChange={(e) => {
              setIsCompleted(false);
              setSearchFieldValue(e.target.value);
              clearMarkers(); // 🔥 ADD THIS
              handleChange(e);
            }}
            value={searchFieldValue}
            className="p-3 outline-none w-full"
          />

          <div className="absolute  right-4 top-1/2 transform  -translate-y-1/2">
            <button type="submit" id="submitButton">
              <FaSearch color="#827d7d" />
            </button>
          </div>
        </div>
        {!isCompleted && suggestions && <div id="optionsDiv">{displaySuggestion(suggestions)}</div>}
      </form>
    </div>
  );
};

export default SearchBar;
