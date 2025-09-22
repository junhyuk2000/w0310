import { weatherIconMap } from "../../utils/weatherIcons";
import "weather-icons/css/weather-icons.css";
import "../CurrentWeather/CurrentWeather.css"
export default function CurrentWeather({ data }) {
  if (!data) return null; 

  const temp = Math.round(data.main.temp);
  const desc = data.weather[0].description;
  const city = data.name;
  const iconCode = data.weather[0].icon;
  const iconClass = weatherIconMap[iconCode];
  const date = new Date().toLocaleDateString("ko-KR");

  return (
    <div className="current_weather">
      <p> 현재 </p>
      <div className="current_weather_info">
        <p className="current_temp">{temp}°C</p>
        <i className={`wi ${iconClass}`}></i>
      </div>
      <p className="current_description">{desc}</p>
      <p className="current_date">{date}</p>
      <h2 className="current_city">{city}</h2>
    </div>
  );
}
