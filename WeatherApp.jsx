import SearchBox from "./SearchBox";
import Infobox from "./Infobox";
import { useState } from "react";
export default function WeatherApp(){
    let [info,setInfo]=useState({
        city:"Delhi",
        temp:18.05,
        temp_max:18.05,
        temp_min:18.05,
        temp_humidity:52,
        temp_feels_like:"haze",
        weather:72.27
    });

    let updater=(result)=>{
        setInfo(result);
    }
    return (
        <div>
            <h1>Weather App by Neeraj</h1>
            <SearchBox updater={updater}/>
            <Infobox info={info}/>
        </div>
    );
}