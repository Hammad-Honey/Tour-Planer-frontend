import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "../store/slices/locationSlice";


function FetchLocations(){
    return(
        <>
        <button>Get Loc. in 10km radius, lahore radius:10000 lat:31.558, lon:74.3507</button>
        </>
    )
}

export default FetchLocations