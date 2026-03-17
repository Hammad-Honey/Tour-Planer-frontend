import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Map from "./components/map/Map";
import "./App.css";
import SearchBar from "./components/search/SearchBar";
import { useMap } from "./contexts/MapContext";
import ResultView from "./components/ResultView/ResultView";
import Counter from "./components/counter";
import FetchLocations from './components/FetchLocations'
import Signup from './Views/Signup/Signup'





function App() {


  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={
          <>

            <div className="sidebar">
              <div className="serach">
                <SearchBar />
                <Counter />
              </div>
              <div className="resultTab h-160 overflow-y-auto">
                <ResultView />
              </div>
            </div>
            <div>
              <Map />
            </div>
          </>
        } />
        <Route path="/locations" element={<FetchLocations />} />
      </Routes>



    </>
  );
}

export default App;