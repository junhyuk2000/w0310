import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Movies from "./components/Movies.jsx";
import Series from "./components/Series.jsx";
import Event from "./components/Event.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/event" element={<Event />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
