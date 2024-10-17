import { Link } from "react-router-dom";
import imagePath from "../../resources/images/toDoList.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title-h1">Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {/*-new card from here-*/}
        <div className="col-10 col-md-5 col-lg-4 text-center">
          <div className="card">
            <h3 className="card-header">To do List</h3>
            <p className="card-text">
              Organizador de tareas por realizar con multiples funciones.
            </p>
            <Link to="/Todolist">
              <img
                className="todoImg"
                src={imagePath}
                alt="To Do List Application Screenshot"
                style={{ width: "420px", height: "250px" }}
              />
            </Link>
            <h5 className="card-text text-muted">Herramientas utilizadas</h5>
            <ul className="list-group list-group-flust">
              <li className="list-group-item">
                React JS <FontAwesomeIcon icon={faReact} />
              </li>
              <li className="list-group-item">
                HTML5 <FontAwesomeIcon icon={faHtml5} />
              </li>
              <li className="list-group-item">
                {" "}
                CSS <FontAwesomeIcon icon={faCss3} />
              </li>
              <li className="list-group-item">Local Storage</li>
            </ul>
          </div>
        </div>
        {/*-new card from here-*/}
      </div>
    </div>
  );
}