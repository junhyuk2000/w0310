export default function CurrentWeather({ data }) {
  const icon = data?.weather?.[0]?.icon;
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : "";

  return (
    <div style={styles.card}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {iconUrl && <img src={iconUrl} alt="" width="64" height="64" />}
        <div>
          <h2 style={{ margin: 0 }}>{data.name}</h2>
          <p style={{ margin: 0 }}>{data.weather?.[0]?.description}</p>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <p style={styles.kv}>온도: {Math.round(data.main.temp)}°C</p>
        <p style={styles.kv}>체감: {Math.round(data.main.feels_like)}°C</p>
        <p style={styles.kv}>습도: {data.main.humidity}%</p>
        <p style={styles.kv}>기압: {data.main.pressure}hPa</p>
        <p style={styles.kv}>가시거리: {Math.round((data.visibility || 0)/1000)}km</p>
        <p style={styles.kv}>바람: {data.wind.speed} m/s</p>
        <p style={styles.kv}>
          일출: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()} /
          일몰: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: { border: "1px solid #eee", borderRadius: 12, padding: 16 },
  kv: { margin: "6px 0" },
};
