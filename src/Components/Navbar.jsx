import { useState } from "react";
import styles from "../Modules/Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const toggleNavbar = () => {
    setHamburgerMenu((prevState) => !prevState);
  };

  hamburgerMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <nav
        className={`${styles.hamburgerMenu} ${
          hamburgerMenu ? styles.open : ""
        }`}
        onClick={() => toggleNavbar()}
      >
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </nav>
      <nav
        className={`${styles.mainNavbar} ${hamburgerMenu ? styles.active : ""}`}
      >
        <ul>
          <li>
            <Link
              className={styles.navLinks}
              to="about"
              onClick={
                hamburgerMenu
                  ? () => setHamburgerMenu((prevState) => !prevState)
                  : null
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.navLinks}
              to="certificates"
              onClick={
                hamburgerMenu
                  ? () => setHamburgerMenu((prevState) => !prevState)
                  : null
              }
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              className={styles.navLinks}
              to="projects"
              onClick={
                hamburgerMenu
                  ? () => setHamburgerMenu((prevState) => !prevState)
                  : null
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={styles.navLinks}
              to="skills"
              onClick={
                hamburgerMenu
                  ? () => setHamburgerMenu((prevState) => !prevState)
                  : null
              }
            >
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
