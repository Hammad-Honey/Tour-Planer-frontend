import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "../store/slices/locationSlice";


function FetchLocations(){
    const data=useSelector((state)=>state.map.data)
    console.log(data)
    return(
        <>
        <button 
        className="border-solid border-black border-2" 
        onClick={()=>useDispatch(fetchLocations({radius:2000, lng:74.3507 , lat:31.558}))}
        >Get Locations</button>
        </>
    )
}

export default FetchLocations