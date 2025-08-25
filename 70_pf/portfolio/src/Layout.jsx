import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./css/Layout.css";

export default function Layout() {
  return (
    <div className="wrap">
      {/* 좌측 35% */}
      <aside className="left">
        <Header />
        
      </aside>

      {/* 우측 65% */}
      <main className="right">
        <nav className="nav">
          <NavLink end to="/" className="btn">ABOUT</NavLink>
          <NavLink to="/skills" className="btn">Skills</NavLink>
          <NavLink to="/education" className="btn">Education</NavLink>
          <NavLink to="/projects" className="btn">Projects</NavLink>
        </nav>
        <Outlet />
      </main>
    </div>
  );
}