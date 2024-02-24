import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
export default function SearchBox({updater}){
    let [TextBox,setTextBox]=useState("");
    let[err,setErr]=useState(false);
    const API_KEY="e9aa290fb15e224a0eedb2bf142bf974";
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    let geocodingcall=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${TextBox}&appid=${API_KEY}&units=metric`);
            let jsonresponse=await response.json();
            console.log(jsonresponse);
            let result={
                city:TextBox,
                temp:jsonresponse.main.temp,
                temp_max:jsonresponse.main.temp_max,
                temp_min:jsonresponse.main.temp_min,
                temp_humidity:jsonresponse.main.humidity,
                temp_feels_like:jsonresponse.main.feels_like,
                weather:jsonresponse.weather[0].description
            }
            console.log(result);
            setErr(false);
            return result;
        }catch(err){
        throw err;
         }
    }
    

    let settingvalue=(event)=>{
        setTextBox(event.target.value);
    }

    let handler=async (event)=>{
        try{
        event.preventDefault();
        console.log(TextBox);
        setTextBox("");
        let ans=await geocodingcall();
        updater(ans);
        }catch(err){
            setErr(true);
        }

    }

    return(
        <div>
            <form onSubmit={handler}>
            <TextField id="TextField" label="City" variant="outlined" value={TextBox} onChange={settingvalue} required />
            <br></br><br></br>
            <Button variant="contained" type="submit" className="button">Search</Button>
            {err && <p>No such place exists</p>}
            </form>
        </div>
    );
}