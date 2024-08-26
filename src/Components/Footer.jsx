import { Link } from "react-router-dom";
import LinkdinPic from "../assets/linkedin.png";
import GithubPic from "../assets/github.png";
import styles from "../Modules/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 James Attia</p>
      <div className={styles.socialLinks}>
        <div className={styles.socialsBlock}>
          <img
            className={styles.socialsLogo}
            src={LinkdinPic}
            alt="LinkdIn Logo"
          />
        </div>
        <Link to="https://linkedin.com/in/jatti045uottawa" target="_blank">
          LinkedIn
        </Link>
        |
        <div className={styles.socialsBlock}>
          <img
            className={styles.socialsLogo}
            src={GithubPic}
            alt="Gituhb Logo"
          />
        </div>
        <Link to="https://github.com/Jatti045" target="_blank">
          GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
