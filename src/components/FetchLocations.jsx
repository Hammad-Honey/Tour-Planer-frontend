import { useSelector, useDispatch } from "react-redux";
import { fetchLocations, fetchCity } from "../store/slices/locationSlice";
import { useEffect } from "react";


export const FetchLocations = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.map.data)
    useEffect(()=> {
        if(data)
            {
                console.log("data",data)
            }
            else  {
                console.log("data is empty yet.")
            }
    },[data])

    const getLocations = async() => {
        dispatch(
            fetchLocations(
                {
                    radius: 20000,
                    lng: 74.3507,
                    lat: 31.558,
                    kinds:'fortifications'
                }
            ))
    }
    const getCityLocation=async()=>{
        dispatch(
            fetchCity(
                {
                    city:'lahore',
                }
            )
        )
    }

    

    return (
        <>
            <button
                className="border-solid border-black border-2"
                onClick={()=> getLocations()}
            >Get Locations</button>
            <div>
                <button onClick={()=>{getCityLocation()}}>
                    fetch City
                </button>
            </div>
        </>
    )
}

export default FetchLocations