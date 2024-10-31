import styles from "../Modules/Header.module.css";
import profilePic from "../assets/portfolio-banner.png";
import JamesAttiaResume from "../James_Attia_Resume.pdf";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header>
        <div className={styles.container}>
          <img
            src={profilePic}
            alt="Profile Picture"
            className={styles.profilePic}
          />
          <h1>James Attia</h1>
          <p>Second Year Software Engineering Student</p>
          <div className={styles.headerButtons}>
            <button
              onClick={() => window.open(JamesAttiaResume, "_blank")}
              className={`${styles.cvContactButton} ${styles.cvContactButtonLeft}`}
            >
              Download CV
            </button>

            <button
              onClick={() =>
                (window.location.href = "mailto:James.atttia@gmail.com")
              }
              className={`${styles.cvContactButton} ${styles.cvContactButtonRight}`}
            >
              Email Me
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
