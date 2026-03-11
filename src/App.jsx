import { useState } from "react";
import Map from "./components/map/Map";
import "./App.css";
import SearchBar from "./components/search/SearchBar";
import { useMap } from "./contexts/MapContext";
import ResultView from "./components/ResultView/ResultView";





function App() {


  return (
    <>
    <Provider store={store}>

    

        <div className="sidebar">
          <div className="serach">
            <SearchBar/>
          </div>
          <div className="resultTab h-160 overflow-y-auto">
            <ResultView/>
          </div>
        </div>

        <div>
          <Map />
        </div>

    </Provider>

    </>
  );
}

export default App;