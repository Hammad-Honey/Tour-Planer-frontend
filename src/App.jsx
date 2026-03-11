import { useState } from "react";
import Map from "./components/map/Map";
import "./App.css";
import SearchBar from "./components/search/SearchBar";
import { useMap } from "./contexts/MapContext";
import ResultView from "./components/ResultView/ResultView";
import Counter from "./components/counter";
import FetchLocations from './components/FetchLocations'





function App() {


  return (
    <>
      <div className="sidebar">
        <div className="serach">
          <SearchBar />
          <Counter/>
        </div>
        <div className="resultTab h-160 overflow-y-auto">
          <ResultView />
        </div>
      </div>
      <div>
        <Map />
        <FetchLocations/>
      </div>

    </>
  );
}

export default App;