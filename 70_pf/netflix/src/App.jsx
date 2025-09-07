import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./page/Layout.jsx";
import Home from "./page/Home.jsx";
import Movies from "./page/Movies.jsx";
import Games from "./page/Games.jsx";
import FilterContents from "./page/FilterContents.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/game" element={<Games />}></Route>
          <Route path="/filtercontents" element={<FilterContents />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
