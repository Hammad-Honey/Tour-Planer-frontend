const apiKey=import.meta.env.VITE_OPEN_TRIP_MAP_API_KEY
console.log(apiKey)

export async function  getHistoricLocations(payload) 
{
    const {radius, lng, lat} = payload
    const res= await fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lng}&lat=${lat}&kinds=historic&limit=50&apikey=${apiKey}`)
    const data = await res.json();
    return data    
}


export async function getCityLocation (city) {
    const res= await fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`)
    const data= await res.json();
    return data    
}