import styles from "../Modules/Main.module.css";
import About from "./About";
import Certificate from "./Certificate";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <main className={styles.main}>
      <div id="about">
        <About />
      </div>
      <div id="certificates">
        <Certificate />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills" className={styles.skillsOuterContainer}>
        <Skills />
      </div>
    </main>
  );
};

export default Main;
