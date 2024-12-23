import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer col-sm">
      <div>
      Copyright® German Mirarchi-{date}{" "}
      <div>
      <a href="https://github.com/lakedv" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="1x"/>
      </a>{" "}
      <a href="https://www.linkedin.com/in/german-mirarchi-07b13b175/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
      </div>
      </div>
    </footer>
  );
}
