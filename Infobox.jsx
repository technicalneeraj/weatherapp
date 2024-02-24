import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import "./Infobox.css";
export default function Infobox({info}){
    const SUMMER_URL="https://i.pinimg.com/originals/9e/ed/f8/9eedf8719a3417d5af0bbaaff6f9345f.jpg";
    const WINTER_URL="https://www.alangil.org/PhotoAlbums/Winter2019/20190207_081724_web.jpg";
    const RAINY_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiIw1oopt-fTh5MKD2CjXr4gMZiGIPZNCEA&usqp=CAU";
    return (
        <div className="maincard">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.temp_humidity>80 ? RAINY_URL: info.temp>15 ? WINTER_URL:SUMMER_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    {info.temp_humidity>80 ? <ThunderstormIcon/>: info.temp>15 ? <AcUnitIcon/>:<BeachAccessIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                    <div>Temperature : {info.temp}&deg;C</div>
                    <div>Temperature Maximum : {info.temp_max}&deg;C</div>
                    <div>Temperature Minimum : {info.temp_min}&deg;C</div>
                    <div>Humidity : {info.temp_humidity}</div>
                    <div>The Weather can be described as <i>{info.weather}</i> feels like {info.temp_feels_like}</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
