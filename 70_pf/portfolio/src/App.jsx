import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Project from "./components/Project";

function App() {
  return (
  <div className="wrap">
     <Header />
      <main>
        <section id="intro"><Intro /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skill /></section>
        <section id="projects"><Project /></section>
      </main>
  </div>
  );
}

export default App;
