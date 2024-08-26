import styles from "../Modules/Projects.module.css";
import ProjectsInfo from "../ProjectsInfo.json";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className="sectionTitle">Projects</h2>
      <div>
        <div className={styles.projectsGrid}>
          {ProjectsInfo.map((projectInfo) => (
            <div className={styles.project} key={projectInfo.id}>
              <h3>{projectInfo.title}</h3>
              <p>{projectInfo.description}</p>
              <Link to={projectInfo.link} target="_blank">
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
