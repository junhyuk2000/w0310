import "../css/Header.css";

export default function Header() {
  return (
    <div className="header">
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
