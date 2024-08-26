import styles from "../Modules/About.module.css";

const About = () => {
  return (
    <>
      <h2 className="sectionTitle">About Me</h2>
      <section className={styles.about}>
        <p className={styles.sectionText}>
          I am a dedicated software engineering student at the University of
          Ottawa with a strong passion for coding and problem-solving. My
          experience spans both frontend and backend development, where I thrive
          on creating elegant solutions to complex challenges.
        </p>
        <p className={styles.sectionText}>
          I have hands-on experience developing a Business Management System in
          Java, utilizing object-oriented principles and JSON-based data
          persistence to manage customer data efficiently. Additionally, I
          designed and implemented a Pokémon search app using HTML, CSS, and
          JavaScript, demonstrating my skills in frontend development and API
          integration.
        </p>
        <p className={styles.sectionText}>
          Through these projects, I have honed not only my technical abilities
          but also my communication and teamwork skills. Proficient in Java,
          Python, HTML/CSS, and JavaScript, and adept with tools like VS Code
          IntelliJ IDEA, and PyCharn, I am committed to delivering innovative
          and efficient solutions that meet real-world needs.
        </p>
      </section>
    </>
  );
};

export default About;
