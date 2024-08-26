import styles from "../Modules/Skills.module.css";
import SkillsInfo from "../SkillsInfo.json";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className="sectionTitle">Skills</h2>
      <div className={styles.container} style={{ "--quantity": 6 }}>
        <div>
          {SkillsInfo.map((skill) => (
            <div
              style={{ "--position": skill.position }}
              className={styles.square}
              key={skill.id}
            >
              {skill.skill}
            </div>
          ))}
          <div className={styles.experienceLevel}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
