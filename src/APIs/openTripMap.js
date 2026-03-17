import { isRejectedWithValue } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_OPEN_TRIP_MAP_API_KEY


export async function getHistoricLocations(payload) {
    try {
        const { radius, lng, lat, kinds} = payload;
        const res = await fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lng}&lat=${lat}&kinds=${kinds}&limit=50&apikey=${apiKey}`)
        const data = await res.json();
        if (!res.ok || data.error){
            console.log(data)
            return data.error;
        }
        else
        {  
            return data
        }
    } catch (error) {
        console.log("Error:", error.message)
        return error
        

    }

}


export async function getCityLocation(payload) {
    const {city}=payload
    try{
        console.log("getCityLocatoin API ", city)
        const res = await fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`)
        const data = await res.json();
        console.log(data)
        if(!res.ok || data.error){    
            console.log(data)
            return data.error
        }
        else{
            console.log("API Success ", data)
            return data;
        }
        
    }
    catch(error){
        console.log("Error In API Request", error.message)
        return error
    }
}