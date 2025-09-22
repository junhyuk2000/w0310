import Header from "../components/Header/Header"
import CurrentWeather from "../components/CurrentWeather/CurrentWeather"
import ForecastDaily from "../components/ForecastDaily/ForecastDaily"
import ForecastHourly from "../components/ForecastHourly/ForecastHourly"
import MainInfo from "../components/MainInfo/MainInfo"
import { useState } from "react";
import { getWeatherByCity,getForecastByCity,getAir } from "../api/weather";
import "../css/Home.css"
export default function Home() {

  const [query,setQuery] = useState("");
  const [data,setData] = useState(null);
  const [forecast,setForecast] = useState(null);
  const [air,setAir] = useState(null);
  const [loading,setLoading] = useState(false);
  const [err,setErr] = useState("");


  const search = async() =>{
    if(!query.trim()) return;
    setLoading(true);
    setErr("");

    try {
      const current = await getWeatherByCity(query.trim());
      const forecastData = await getForecastByCity(query.trim());

      setData(current);
      setForecast(forecastData);

      if(current.coord){
        const airData = await getAir({lat : current.coord.lat, lon : current.coord.lon});
        setAir(airData);
      } else {
        setAir(null);
      }
    } catch(e) {
      setErr("도시를 찾을 수 없습니다.");
      setData(null);
      setForecast(null);
      setAir(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Header 
        value={query}
        onChange={setQuery}
        onSubmit={search}
        />
      </div>
      <div className="container">
        <div className='left'>
          <div>
            {loading && <p>불러오는 중 ..</p>}
            {data && <CurrentWeather data={data}/>}
          </div>
            {forecast && <ForecastDaily data={forecast}/>}
        </div>
        <div className='right'>
          {data && <MainInfo data={data} air={air}/>}
          {forecast && <ForecastHourly data={forecast} />}
        </div>
      </div>
      {err && <p className="err">{err}</p>}
    </div>
  )
}
