import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import proyectos from "../../proyectos.json";

const iconMap = {
  faReact,
  faHtml5,
  faCss3,
  faNode,
};

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title-h1">Proyectos</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="col-10 col-md-5 col-lg-4 text-center">
            <div className="card mb-3">
              <h3 className="card-header">{proyecto.title}</h3>
              <p className="card-text">{proyecto.linea1}</p>
              <Link to={proyecto.path}>
                <img
                  src={require(`../../resources/images/${proyecto.img}`)}
                  alt={`${proyecto.title} imagen`}
                  style={{ width: "420px", height: "250px" }}
                />
              </Link>
              <h5 className="card-text text-muted">{proyecto.linea2}</h5>

              <ul className="list-group list-group-flust">
                {proyecto.tools.map((tool, toolIndex) => (
                  <li key={toolIndex} className="list-group-item">
                    {tool.name}{" "}
                    {tool.icon && iconMap[tool.icon] && (
                      <FontAwesomeIcon icon={iconMap[tool.icon]} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
