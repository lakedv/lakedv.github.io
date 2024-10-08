import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      
      <p>
      Copyright® German Mirarchi-{date}{" "}
      <span>
      <a href="https://github.com/lakedv">
        <FontAwesomeIcon icon={faGithub} size="x1"/>
      </a>{" "}
      <a href="https://www.linkedin.com/in/german-mirarchi-07b13b175/">
        <FontAwesomeIcon icon={faLinkedin} size="x1" />
      </a>
      </span>
      </p>
    </footer>
  );
}
