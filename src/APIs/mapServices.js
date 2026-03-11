
async function getAreaName(lng,lat,accessToken) {
    const res=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${accessToken}`);
    const data=await res.json();
    return data.features[0].place_name;
}
export default getAreaName;


export const fetchPlaces = async () => {
  const res = await fetch("/api/places");
  return res.json();
};

export const getClickLocation =
    (map) => 
        map.on("click", async (e) => {
            const { lng, lat } = e.lngLat;
            console.log([ lng, lat ]);

            return [lng, lat ]
        });
