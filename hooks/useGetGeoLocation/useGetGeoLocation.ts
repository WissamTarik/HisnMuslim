import { useState } from "react"

export default function useGetGeoLocation() {
    const [longitude, setLongitude] = useState(30.0444);
    const [latitude, setlatitude] = useState(31.2357);
    const [locationType, setLocationType] = useState<"user"|"default">("default");
function getUserLocation()
{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(({coords})=>{
              
        setLongitude(coords.longitude)
        setlatitude(coords.latitude)
        setLocationType("user")
        } ) }
        
    }
  return {
    getUserLocation,
locationType,
latitude,
longitude
  }
}
