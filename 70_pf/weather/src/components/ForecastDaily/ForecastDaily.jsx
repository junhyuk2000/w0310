import { weatherIconMap } from "../../utils/weatherIcons";
import "weather-icons/css/weather-icons.css";
import "../ForecastDaily/ForecastDaily.css"

function summarizeDailyForecast(data) {
  if (!data?.list?.length) return [];

  const tz = data.city?.timezone ?? 0;
  const dailyMap = {};

  data.list.forEach((forecast) => {
    const local = new Date((forecast.dt + tz) * 1000);
    const key = local.toISOString().split("T")[0];

    if (!dailyMap[key]) {
      dailyMap[key] = {
        date: `${local.getUTCMonth() + 1}월 ${local.getUTCDate()}일 (${
          ["일","월","화","수","목","금","토"][local.getUTCDay()]
        })`,
        minTemp: Infinity,
        maxTemp: -Infinity,
        forecasts: [],
      };
    }

    dailyMap[key].minTemp = Math.min(dailyMap[key].minTemp, forecast.main.temp_min);
    dailyMap[key].maxTemp = Math.max(dailyMap[key].maxTemp, forecast.main.temp_max);
    dailyMap[key].forecasts.push(forecast);
  });

  return Object.values(dailyMap)
    .slice(0, 5)
    .map((day) => {
      const noon = day.forecasts.find((f) => {
        const hour = new Date((f.dt + tz) * 1000).getUTCHours();
        return hour === 12;
      }) ?? day.forecasts[0];

      const iconCode = noon.weather?.[0]?.icon;
      const iconClass = weatherIconMap[iconCode] || "wi wi-na";

      return {
        date: day.date,
        minTemp: Math.round(day.minTemp),
        maxTemp: Math.round(day.maxTemp),
        iconClass,
      };
    });
}

export default function ForecastDaily({ data }) {
  const dailyData = summarizeDailyForecast(data);

  return (
    <div className="forecast_daily">
      <h3 className="forecast_title">5일 예보</h3>
      <div className="forecast_box">
        {dailyData.map((d) => (
          <div key={d.date} className="forecast_block">
            <i className={`wi ${d.iconClass}`}></i>
            <p className="forecast_temp">{d.minTemp}° / {d.maxTemp}°</p>
            <p className="forecast_time">{d.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}