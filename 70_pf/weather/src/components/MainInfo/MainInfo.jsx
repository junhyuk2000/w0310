import "weather-icons/css/weather-icons.css";
import "../MainInfo/MainInfo.css"
import Card from "../Card/Card"
export default function MainInfo({data,air}) {  
  const aqiLabel =(a)=>{
    if(a<=15) return 1;
    if(a<=35) return 2;
    if(a<=75) return 3;
    return 4;
  };
  const airInfo = air?.list?.[0]?.components ?? {};

  const toLocalTime = (tsSec,tzSec) => {
    const date = new Date((tsSec+tzSec)*1000);
    const hh = String(date.getUTCHours()).padStart(2,"0");
    const mm = String(date.getUTCMinutes()).padStart(2,"0");
    return `${hh} : ${mm}`;
  };

  
  const toKm = (m) => (m / 1000).toFixed(m >= 10000 ? 0 : 1);
  const toTemp = (c) => c.toFixed(1);  

  // 대기 오염 지수
  const values = {
    pm2_5 : airInfo?.pm2_5,
    pm10 : airInfo?.pm10,
    o3 : airInfo?.o3,
    no2 : airInfo?.no2,
    sunRise : toLocalTime(data.sys.sunrise , data.timezone),
    sunSet : toLocalTime(data.sys.sunset , data.timezone),
    humidity : data?.main?.humidity,
    pressure : data?.main?.pressure,
    visibility : toKm(data?.visibility),
    feelsLike : toTemp(data?.main?.feels_like)
  };
  
  const topCard = [
    {
      title: "대기오염 지수",
      icon:`/images/aqi/${aqiLabel(values.pm2_5)}.svg`,
      className:"top",
      children:(
        <div className='maininfo_txt_top'>
          <img src="/images/MainInfo/wind.svg" alt="바람" id="wind_img"/>
          <div className='info_box'><p>미세먼지</p><p>{values.pm2_5} </p></div>
          <div className='info_box'><p>초미세먼지</p> <p>{values.pm10} </p></div>
          <div className='info_box'><p>오존</p><p>{values.o3} </p></div>
          <div className='info_box'><p>이산화 질소</p><p>{values.no2} </p></div>
        </div>
      )
    },
    {
      title:"일출 / 일몰",
      icon:"",
      className:"top",
      children : (
        <div className='maininfo_txt_top'>
          <div className="info_sun">
            <img src="/images/MainInfo/sunrise.svg" alt="일출" />
            <div><p>일출</p><p>{values.sunRise}</p></div>
          </div>
          <div className="info_sun">
            <img src="/images/MainInfo/sunset.svg" alt="일몰" />
            <div><p>일몰</p><p>{values.sunSet}</p></div>
          </div>
        </div>
      )
    }
  ];
  const bottomCard = [
    { title: "습도",      icon: "/images/MainInfo/humidity.svg",  className:"bottom", value: values.humidity,   unit: "%"  },
    { title: "기압",      icon: "/images/MainInfo/pressure.svg",  className:"bottom", value: values.pressure,   unit: "hPa"},
    { title: "가시거리",  icon: "/images/MainInfo/visibility.svg",className:"bottom", value: values.visibility, unit: "km" },
    { title: "체감 온도", icon: "/images/MainInfo/feelsLike.svg", className:"bottom", value: values.feelsLike, unit: "℃" },
  ];
 

  return (
    <div className='main_info'>
      <h3 className='main_info_title'>오늘의 주요 정보</h3>
      <div className='maininfo_air_top'>
        {topCard.map((c,i)=>(
          <Card key={i} title={c.title} icon={c.icon} className={c.className}>
            {c.children}
          </Card>
        ))}
      </div>
      <div className='maininfo_air_bottom'>
        {bottomCard.map((c,i)=>(
          <Card key={i} title={c.title} icon={c.icon} value={c.value} unit={c.unit} className={c.className} />
        ))}
      </div>
    </div>
  )
}
