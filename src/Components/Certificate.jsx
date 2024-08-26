import styles from "../Modules/Certificate.module.css";
import HtmlCssCertificate from "../assets/web-development-certificate.png";
import JavaScriptCertificate from "../assets/javascript-algorithms-and-data-structures-certificate.png";
import { Link } from "react-router-dom";

const Certificate = () => {
  return (
    <>
      <h2 className="sectionTitle">Certificates</h2>
      <section>
        <div className={styles.certificates}>
          <Link
            to="https://www.freecodecamp.org/certification/James-Attia/responsive-web-design"
            target="_blank"
          >
            <img
              className={styles.certificateImg}
              src={HtmlCssCertificate}
              alt="Html-Css-Certificate"
            />
          </Link>
          <Link
            to="https://www.freecodecamp.org/certification/James-Attia/javascript-algorithms-and-data-structures-v8"
            target="_blank"
          >
            <img
              className={styles.certificateImg}
              src={JavaScriptCertificate}
              alt="javascript-certificate"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Certificate;
