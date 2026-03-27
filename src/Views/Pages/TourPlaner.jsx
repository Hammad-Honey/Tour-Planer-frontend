import Map from "../../components/map/Map";
import SearchBar from '../../components/map/SearchBar';
import ResultView from '../../components/map/ResultView';
import Filter from "../../components/map/Filter";
import { useState } from "react";

function TourPlaner() {
    return (
        <>
            <div className="relative ">
                <div className="absolute flex items-center gap-5 z-10 px-2 py-2">
                    <div className="w-96">
                        <SearchBar />
                    </div>
                    <div className="">
                    
                        <Filter />
                    </div>

                </div>
                <div className="">
                    <div className="">
                        <ResultView />
                    </div>
                </div>
            </div>

            <div className="">
                <Map />
            </div>

        </>
    )
}

export default TourPlaner;