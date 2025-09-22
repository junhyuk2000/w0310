import { weatherIconMap } from "../../utils/weatherIcons";
import "weather-icons/css/weather-icons.css";
import "../ForecastHourly/ForecastHourly.css"
import Card from "../Card/Card"
export default function ForecastHourly({data}) {
  if (!data || !data.list) return null;
  const tz = data.city?.timezone ?? 0;

  const toLocalTime = (tsSec,tzSec) => {
    const date = new Date((tsSec+tzSec)*1000);
    const hh = String(date.getUTCHours()).padStart(2,"0");
    const mm = String(date.getUTCMinutes()).padStart(2,"0");
    return `${hh}:${mm}`;
  };

  const todayData = data.list.slice(0, 8);
  const items= todayData.map((item)=>{
    const time=toLocalTime(item.dt, tz);
    const value = Math.round(item.main?.temp);
    const iconUrl = `https://openweathermap.org/img/wn/${item.weather?.[0]?.icon}@2x.png`;
    return{ time,value,iconUrl }
})
 

  return (
    <div className="forecast_hourly">
      <h3 className="forecast_hourly_title">시간대 별 예보</h3>
      <div className="forecast_hourly_body">
        {items.map((c,i)=>(
          <Card
          key={i}
          title={c.time}
          icon={c.iconUrl}
          value={c.value}
          unit = "°C"
          className="forecast_card"
          />
          )
        )}
      </div>
    </div>
  );
}
