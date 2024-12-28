import styles from "../Modules/About.module.css";

const About = () => {
  return (
    <>
      <h2 className="sectionTitle">About Me</h2>
      <section className={styles.about}>
        <p className={styles.sectionText}>
          I am a dedicated software engineering student at the University of
          Ottawa with a strong passion for coding and problem-solving. My
          academic journey has provided me with a solid foundation in both
          frontend and backend development, and I enjoy creating elegant
          solutions to complex challenges.
        </p>
        <p className={styles.sectionText}>
          My hands-on experience includes developing a Business Management
          System in Java, utilizing object-oriented principles and JSON-based
          data persistence to efficiently manage customer data. Additionally, I
          designed and implemented a Pokémon search app using HTML, CSS, and
          JavaScript, showcasing my frontend development skills and API
          integration expertise.
        </p>
        <p className={styles.sectionText}>
          I've also worked on projects such as a Learning Management System
          Accessibility Tool built with React and Firebase, designed to help
          professors enhance accessibility in course materials, and an Event
          Attendance Management System (EAMS) for universities, leveraging
          Android, Java, and Firebase for seamless event management.
        </p>
        <p className={styles.sectionText}>
          With proficiency in Java, Python, JavaScript, HTML/CSS, and ReactJS,
          as well as experience with developer tools like VS Code, IntelliJ
          IDEA, and PyCharm, I am committed to delivering innovative and
          efficient solutions that meet real-world needs. I thrive in
          collaborative environments, bringing strong communication and teamwork
          skills to every project.
        </p>
      </section>
    </>
  );
};

export default About;
