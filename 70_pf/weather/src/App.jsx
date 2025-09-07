import { useState } from "react";
import { getWeatherByCity } from "./api/weather";
import CurrentWeather from "./components/CurrentWeather";

export default function App() {
  const [q, setQ] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const search = async () => {
    const city = q.trim();
    if (!city) return;
    setLoading(true);
    setErr("");
    try {
      const res = await getWeatherByCity(city);
      setData(res);
    } catch (e) {
      setData(null);
      setErr("도시를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") search();
  };

  return (
    <div style={{ maxWidth: 640, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 22, marginBottom: 12 }}>날씨 앱 (axios)</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          style={{ flex: 1, padding: "10px 12px", border: "1px solid #ddd", borderRadius: 8 }}
          placeholder="도시명 입력 (예: Seoul, Tokyo)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button
          onClick={search}
          style={{ padding: "10px 12px", borderRadius: 8, border: "1px solid #ddd", background: "#f7f7f7" }}
        >
          검색
        </button>
      </div>

      {loading && <p>불러오는 중…</p>}
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      {data && <CurrentWeather data={data} />}
    </div>
  );
}
