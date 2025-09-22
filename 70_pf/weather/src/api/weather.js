import axios from "axios";

const KEY = import.meta.env.VITE_OWM_KEY;

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: { appid: KEY, units: "metric", lang: "kr" },
});

// 도시명으로 현재 날씨
export const getWeatherByCity = (city, options = {}) =>
  api
    .get("/weather", { params: { q: city }, signal: options.signal })
    .then(r => r.data);

// 도시 명으로 날씨 예보
export const getForecastByCity = (city, options = {}) =>
  api
    .get("/forecast", { params: { q: city }, signal: options.signal })
    .then(r => r.data);

//  대기 오염 데이터 받아오기 / 좌표 기반
export const getAir = ({ lat , lon}, options={}) =>
  api
    .get("/air_pollution", { params: { lat , lon }, signal : options.signal })
    .then(r=>r.data);
