import Map from "../../components/map/Map";
import SearchBar from "../../components/map/SearchBar";
// import ResultView from '../../components/map/ResultView';
import Filter from "../../components/map/Filter";
import { useState } from "react";

function TourPlaner() {
  return (
    <>
      <div className=" ">
        <div className="">
          <div className="w-96 absolute z-10 px-2 py-2">
            <SearchBar />
          </div>
        </div>
        <div className="absolute z-10 px-2 py-2 left-100">
          <Filter />
        </div>
        <div className="">
          <div className="">{/* <ResultView /> */}</div>
        </div>
      </div>

      <div className="h-full z-0 absolute left-0 right-0">
        <Map />
      </div>
    </>
  );
}

export default TourPlaner;
