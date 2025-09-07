import { useEffect,useState } from "react";
import "../css/Header.css";

export default function Header() {
  const [ scroll , setScroll ] = useState(false);

  useEffect(()=>{
    const onScroll = () => setScroll(window.scrollY>850);
    window.addEventListener("scroll",onScroll);
    onScroll();
    return () =>window.removeEventListener("scroll",onScroll);
  },[])

  return (
    <div className={`header ${scroll ? "scroll" : ""}`}>
      <div className="header_inner">
        <h2><a href="#intro"  className="name">JunHyuk Portfolio</a></h2>
        <nav className="gnb">
            <a href="#about">&lt;About /&gt;</a>
            <a href="#education">&lt;Education /&gt;</a>
            <a href="#skills">&lt;Skill /&gt;</a>
            <a href="#projects">&lt;Project /&gt;</a>
        </nav>
      </div>
    </div>
  );
}
